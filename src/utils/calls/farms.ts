export const stakeFarm = async (stakerContract, amount) => {
  const tx = await stakerContract.stake(amount)
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (stakerContract, amount) => {
  const tx = await stakerContract.withdraw(amount)
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (stakerContract) => {
  const tx = await stakerContract.getReward()
  const receipt = await tx.wait()
  return receipt.status
}
