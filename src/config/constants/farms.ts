import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 1,
    lpSymbol: 'USDT-xRING LP',
    lpAddresses: {
      44: '0x29BF15B31029c889E397Cc153C1F225e200581BC',
      256: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.ring,
    rewardToken: serializedTokens.ring,
    poolAddress: '0x85A1b1c1f8Fc999E8497b62b130aAe8f3B15Cf86',
    startTime: 1650438000000,
    rewardsDuration: 15552000,
    rewardsAmount: '1000000000000000',
  },
  {
    pid: 2,
    lpSymbol: 'USDC-CRAB LP',
    lpAddresses: {
      44: '0x75D4D59991D388Dd0e1c5224AF605a3E79e1f17e',
      256: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
    rewardToken: serializedTokens.wbnb,
    poolAddress: '0x426C4cd3C890AD717351550b7Ec221b36cbA0D72',
    startTime: 1650438000000,
    rewardsDuration: 15552000,
    rewardsAmount: '7000000000000000000000000',
  },
]

export default farms
