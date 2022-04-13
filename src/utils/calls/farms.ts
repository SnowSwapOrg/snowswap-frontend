import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (stakerContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await stakerContract.stake(amount, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (stakerContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await stakerContract.withdraw(amount, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (stakerContract) => {
  const gasPrice = getGasPrice()
  const tx = await stakerContract.getReward({ ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}
