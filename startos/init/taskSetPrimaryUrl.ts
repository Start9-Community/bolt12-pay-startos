import { storeJson } from '../fileModels/store.json'
import { manifest } from '../manifest'
import { primaryUrl } from '../primaryUrl'
import { sdk } from '../sdk'

// LNURL / Lightning Address is optional, so only a chosen URL that is no longer
// one of the interface's addresses raises the task; a fresh install gets none.
export const taskSetPrimaryUrl = sdk.setupOnInit(async (effects) => {
  const stored = await storeJson.read((s) => s.primaryUrl).const(effects)
  if (stored && !(await primaryUrl.bestUsable(effects).const())) {
    await sdk.action.createOwnTask(effects, primaryUrl.action, 'critical', {
      reason:
        'Your BOLT12 Pay primary URL is no longer available. Select a new one for LNURL / Lightning Address.',
    })
  } else {
    await sdk.action.clearTask(
      effects,
      `${manifest.id}:${primaryUrl.action.id}`,
    )
  }
})
