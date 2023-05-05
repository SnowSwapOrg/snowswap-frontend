// Set of helper functions to facilitate wallet setup

import { BASE_BSC_SCAN_URL, BASE_URL, CHAIN_NAME, NATIVE_TOKEN_NAME, NATIVE_TOKEN_SYMBOL, CHAIN_ID } from 'config'
import { nodes } from './getRpcUrl'

/**
 * Prompt the user to add CRAB as a network on Metamask, or switch to CRAB if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: CHAIN_NAME,
            nativeCurrency: {
              name: NATIVE_TOKEN_NAME,
              symbol: NATIVE_TOKEN_SYMBOL,
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error(`Can't setup the ${CHAIN_NAME} network on metamask because window.ethereum is undefined`)
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/tokens/${CHAIN_ID}/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}
