import { storeJson } from './fileModels/store.json'
import { sdk } from './sdk'
import { uiHostId, uiInterfaceId } from './utils'

export const primaryUrl = sdk.setupPrimaryUrl({
  id: 'set-primary-url',
  hostId: uiHostId,
  interfaceId: uiInterfaceId,
  metadata: {
    name: 'Set Primary URL',
    description:
      'Choose which of your BOLT12 Pay URLs to advertise as the public base for LNURL and Lightning Address. Use a clearnet or custom-domain URL — Tor and .local addresses will not resolve for external senders. The in-app admin settings can still override this. If BOLT12 Pay is running, it restarts to apply the change.',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  field: { name: 'URL', description: null },
  get: storeJson.read((s) => s.primaryUrl),
  set: (effects, url) => storeJson.merge(effects, { primaryUrl: url }),
  fallback: false,
})
