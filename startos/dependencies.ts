import { depLndDescription } from './manifest/i18n'
import { sdk } from './sdk'

const lnd = sdk.Dependency.required('lnd', {
  description: depLndDescription,
  metadata: {
    title: 'LND',
    icon: 'https://raw.githubusercontent.com/Start9Labs/lnd-startos/6a24e93761aa9046d427d0e62021defcaf9b47f3/icon.svg',
  },
  versionRange: '>=0.21.1-beta:4',
  kind: 'running',
  healthChecks: ['lnd'],
}).withInit(async (effects) => {
  // Earlier versions raised this onion-messages task against pre-0.21 LND.
  await sdk.action.clearTask(effects, 'lnd:autoconfig')
})

export const dependencies = sdk.Dependencies.of().addDependency(lnd)
