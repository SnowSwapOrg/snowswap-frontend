import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId]
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}

export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return getAddress(addresses[vaultKey])
}

export const getFarmChefAddress = () => {
  return getAddress(addresses.farmChef)
}

export const isSameAddress = (address: string, other: string) => {
  return address.toLowerCase() === other.toLowerCase()
}
