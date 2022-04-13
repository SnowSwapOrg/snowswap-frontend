import { useEffect, useState } from 'react'

export const useFarmChefGetStakerAddress = (farmChefContract, lpAddress) => {
  const [stakerAddress, setStakerAddress] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const result = await farmChefContract.poolsInfo(lpAddress)
      setStakerAddress(result)
    }

    if (farmChefContract && lpAddress) {
      fetchData()
    }
  }, [farmChefContract, lpAddress])

  return stakerAddress
}
