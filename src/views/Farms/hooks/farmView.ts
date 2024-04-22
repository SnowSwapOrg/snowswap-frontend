import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL } from 'config'

export const stakeFarm = async (masterChefContract, pid, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  if (pid === 0) {
    const tx = await masterChefContract.enterStaking(value)
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.deposit(pid, value)
  const receipt = await tx.wait()
  return receipt.status
}

export const getFarmStakerAddress = async (farmChefContract, lpAddress) => {
  const result = await farmChefContract.stakingRewardsInfoByStakingToken(lpAddress)

  return result
}
