import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.105:1',

  releaseNotes: {
    en_US:
      'Onion messages are now built into LND 0.21, so BOLT12 Pay no longer configures them: the one-click Auto-Configure task has been removed and BOLT12 Pay now requires LND 0.21.0-beta or newer.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
