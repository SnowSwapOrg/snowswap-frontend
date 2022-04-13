import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 1,
    lpSymbol: 'CRAB-xRING LP',
    lpAddresses: {
      44: '0x7f08bC6a84FfC8Fdc5C96FC641E643680018c071',
      256: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.ring,
    rewardToken: serializedTokens.testring,
    poolAddress: '0x0C9873496Ae80661e6eA92AF540dAd8Bc1ae1002',
  },
]

export default farms
