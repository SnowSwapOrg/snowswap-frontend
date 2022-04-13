import useRefresh from 'hooks/useRefresh'
import { useCallback, useEffect, useState } from 'react'
import { BIG_ZERO, ethersToBigNumber } from 'utils/bigNumber'
import { harvestFarm, stakeFarm, unstakeFarm } from 'utils/calls/farms'

export const useFarmStakerTotalSupply = (farmStakerContract) => {
  const [totalSupply, setTotalSupply] = useState(BIG_ZERO)
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchData = async () => {
      const result = await farmStakerContract.totalSupply()
      setTotalSupply(ethersToBigNumber(result))
    }

    if (farmStakerContract) {
      fetchData()
    }
  }, [farmStakerContract, slowRefresh])

  return totalSupply
}

export const useFarmStakerBalanceOf = (farmStakerContract, account) => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    const fetchData = async () => {
      const result = await farmStakerContract.balanceOf(account)
      setBalance(ethersToBigNumber(result))
    }

    if (farmStakerContract && account) {
      fetchData()
    }
  }, [account, farmStakerContract, fastRefresh])

  return balance
}

export const useFarmStakerEarned = (farmStakerContract, account) => {
  const [earned, setEarned] = useState(BIG_ZERO)
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    const fetchData = async () => {
      const result = await farmStakerContract.earned(account)
      setEarned(ethersToBigNumber(result))
    }

    if (farmStakerContract && account) {
      fetchData()
    }
  }, [account, farmStakerContract, fastRefresh])

  return earned
}

export const useStakeFarms = (farmStakerContract) => {
  const handleStake = useCallback(
    async (amount: string) => {
      await stakeFarm(farmStakerContract, amount)
    },
    [farmStakerContract],
  )

  return { onStake: handleStake }
}

export const useUnstakeFarms = (farmStakerContract) => {
  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(farmStakerContract, amount)
    },
    [farmStakerContract],
  )

  return { onUnstake: handleUnstake }
}

export const useHarvestFarms = (farmStakerContract) => {
  const handleHarvest = useCallback(async () => {
    await harvestFarm(farmStakerContract)
  }, [farmStakerContract])

  return { onHarvest: handleHarvest }
}
