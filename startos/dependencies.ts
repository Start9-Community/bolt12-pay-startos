import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async () => {
  // BOLT12 offers require onion-message support on LND. LND 0.21 advertises it
  // natively (no lnd.conf changes needed), so we just require that version —
  // earlier releases needed a one-click Auto-Configure task, now removed since
  // LND 2.0 no longer exposes those onion-message config keys.
  return {
    lnd: {
      kind: 'running',
      versionRange: '>=0.21.1-beta:0',
      healthChecks: ['lnd'],
    },
  }
})
