import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 1,
  //   lpSymbol: 'USDT-xRING (Classic) LP',
  //   lpAddresses: {
  //     44: '0x29BF15B31029c889E397Cc153C1F225e200581BC',
  //     46: '',
  //     256: '',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.ring,
  //   rewardToken: serializedTokens.ring,
  //   poolAddress: '0x85A1b1c1f8Fc999E8497b62b130aAe8f3B15Cf86',
  //   startTime: 1650438000,
  //   rewardsDuration: 15552000,
  //   rewardsAmount: '1000000000000000',
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'USDC-CRAB LP',
  //   lpAddresses: {
  //     44: '0x75D4D59991D388Dd0e1c5224AF605a3E79e1f17e',
  //     46: '',
  //     256: '',
  //   },
  //   token: serializedTokens.usdc,
  //   quoteToken: serializedTokens.wbnb,
  //   rewardToken: serializedTokens.wbnb,
  //   poolAddress: '0x426C4cd3C890AD717351550b7Ec221b36cbA0D72',
  //   startTime: 1650438000,
  //   rewardsDuration: 15552000,
  //   rewardsAmount: '7000000000000000000000000',
  // },
  {
    pid: 4,
    lpSymbol: 'CRAB-CKTON LP',
    lpAddresses: {
      44: '0x819891bE4586dDfc3399cfFc69d22CC40B913349',
      46: '',
      256: '',
    },
    token: serializedTokens.ckton,
    quoteToken: serializedTokens.wbnb,
    rewardToken: serializedTokens.wbnb,
    poolAddress: '0x41965d8F028183419b12234045b22A98585C60d2',
    startTime: 1720569600,
    rewardsDuration: 15552000,
    rewardsAmount: '1000000000000000000000000',
  },
  {
    pid: 3,
    lpSymbol: 'KTON-RING LP',
    lpAddresses: {
      44: '',
      46: '0x28B4579C37E82D6F57F88d35D34591E7Cd26398E',
      256: '',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.kton,
    rewardToken: serializedTokens.wbnb,
    poolAddress: '0x7363383D8332536E8aBD129a304209589b724966',
    startTime: 1712880000,
    rewardsDuration: 15552000,
    rewardsAmount: '1400000000000000000000000',
  },
]

export default farms
