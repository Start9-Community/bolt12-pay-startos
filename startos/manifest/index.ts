import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bolt12-pay',
  title: 'BOLT12 Pay',
  license: 'mit',
  packageRepo: 'https://github.com/Start9-Community/bolt12-pay-startos',
  upstreamRepo: 'https://github.com/Alex71btc/lndk-pay',
  marketingUrl: 'https://github.com/Alex71btc/lndk-pay',
  donationUrl: 'https://geyser.fund/project/bolt12pay',
  description: { short, long },
  volumes: ['main', 'startos'],
  images: {
    main: {
      source: {
        dockerBuild: {},
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
