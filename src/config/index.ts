import { ChainId } from '@snowswap/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://crab.subscan.io',
  [ChainId.TESTNET]: 'https://testnet.hecoinfo.com',
  [ChainId.DARWINIA]: 'https://darwinia.subscan.io',
}

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 9 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const CAKE_PER_BLOCK = 40
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = 'https://snowswap.xyz'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[chainId]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
// In reality its 10000 because of fast refresh, a bit less here to cover for possible long request times
export const PANCAKE_BUNNIES_UPDATE_FREQUENCY = 8000

export const NATIVE_TOKEN_SYMBOL = process.env.REACT_APP_NATIVE_TOKEN_SYMBOL
export const NATIVE_TOKEN_NAME = process.env.REACT_APP_NATIVE_TOKEN_NAME
export const CHAIN_NAME = process.env.REACT_APP_CHAIN_NAME
export const CHAIN_ID = chainId

export class Currency {
  public readonly decimals: number

  public readonly symbol?: string

  public readonly name?: string

  public static readonly ETHER: Currency = new Currency(18, NATIVE_TOKEN_SYMBOL, NATIVE_TOKEN_NAME)

  protected constructor(decimals: number, symbol?: string, name?: string) {
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

export const { ETHER } = Currency
