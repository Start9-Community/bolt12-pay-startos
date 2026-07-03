import { T, utils } from '@start9labs/start-sdk'
import {
  controlHostId,
  gRPCHostId,
  gRPCInterfaceId,
  lndconnectRestId,
} from 'lnd-startos/startos/interfaces'
import { sdk } from './sdk'

export const uiPort = 8081

// Host id (the `sdk.MultiHost.of` group) carrying the ui interface — distinct
// from the interface id exported on it. Used for `sdk.host.getOwn` lookups.
export const uiHostId = 'main'
export const uiInterfaceId = 'ui'

export async function getNonLocalUrls(effects: T.Effects): Promise<string[]> {
  return sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === uiInterfaceId)
      return iface ? iface.addressInfo.nonLocal.format() : []
    })
    .const()
}

/**
 * The IPv4 LXC-bridge hostname/port for an interface on an already-resolved
 * `FilledHost`. Pure — call INSIDE a `sdk.host` map fn so `.const()` narrows its
 * reactivity to just this address. `.startos` DNS is deprecated; containers
 * reach each other over the bridge. `ssl` picks the http vs https variant.
 */
const bridgeAddr = (
  host: utils.FilledHost | null,
  interfaceId: string,
  ssl?: boolean,
) => {
  const iface =
    host &&
    Object.values(host.bindings)
      .flatMap((b) => Object.values(b.interfaces))
      .find((i) => i.id === interfaceId)
  return iface
    ? iface.addressInfo
        .filter({
          kind: 'bridge',
          predicate: (h) =>
            h.metadata.kind === 'ipv4' && (ssl === undefined || h.ssl === ssl),
        })
        .hostnames[0]
    : undefined
}

/**
 * LND's REST + gRPC addresses over the LXC bridge, injected into start.sh as
 * LND_REST_URL / LND_GRPC_ADDRESS. LND's `lnd.startos` DNS name is gone in 2.0;
 * its StartOS-issued TLS cert now covers the bridge address, so lndk and curl
 * still pin it. Throws until LND has exported both hosts (its REST/gRPC
 * interfaces appear only once its wallet macaroon exists) — which re-runs
 * setupMain when they resolve.
 */
export async function lndBridgeEnv(
  effects: T.Effects,
): Promise<Record<string, string>> {
  const restUrl = await sdk.host
    .get(effects, { hostId: controlHostId, packageId: 'lnd' }, (host) => {
      const h = bridgeAddr(host, lndconnectRestId, true)
      return h && `https://${h.hostname}:${h.port}`
    })
    .const()
  const grpcUrl = await sdk.host
    .get(effects, { hostId: gRPCHostId, packageId: 'lnd' }, (host) => {
      const h = bridgeAddr(host, gRPCInterfaceId, true)
      return h && `https://${h.hostname}:${h.port}`
    })
    .const()
  if (!restUrl || !grpcUrl) {
    throw new Error(
      'LND is not yet reachable on the internal network. Waiting for LND to finish starting...',
    )
  }
  return { LND_REST_URL: restUrl, LND_GRPC_ADDRESS: grpcUrl }
}

/**
 * Map the StartOS primary URL onto the app's native LNURL / BIP353 env vars.
 * Upstream reads these as defaults; the in-app admin config still overrides
 * them. Returns {} when no primary URL is set.
 */
export function lnurlEnv(
  primaryUrl: string | null | undefined,
): Record<string, string> {
  if (!primaryUrl) return {}
  const url = primaryUrl.trim().replace(/\/+$/, '')
  let host = ''
  try {
    host = new URL(url).hostname.toLowerCase()
  } catch {
    return {}
  }
  return {
    LNURL_BASE_URL: url,
    LNURL_BASE_DOMAIN: host,
    PUBLIC_LNURL_ADDRESS: `lnurl@${host}`,
    PUBLIC_BIP353_ADDRESS: `bolt12@${host}`,
  }
}
