import { ChainId, JSBI, Percent, Token } from '@snowswap/sdk'
import { darwiniaTokens, mainnetTokens, testnetTokens } from './tokens'

// a list of tokens by chain
type RouterList = {
  readonly [chainId in ChainId]: string
}

const ROUTER_MAP: RouterList = {
  [ChainId.MAINNET]: '0xAF5cAa87a7d3718622604268C43fF6cE9d2cEc3C',
  [ChainId.TESTNET]: '0xAF5cAa87a7d3718622604268C43fF6cE9d2cEc3C',
  [ChainId.DARWINIA]: '0xB899409cDA0fFA2bF87F9c7b31f3c77D6A3a0bB0',
}

export const ROUTER_ADDRESS = ROUTER_MAP[process.env.REACT_APP_CHAIN_ID]

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.ring,
    mainnetTokens.xwring,
    mainnetTokens.usdt,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.ring],
  [ChainId.DARWINIA]: [darwiniaTokens.wbnb, darwiniaTokens.kton],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.xwring, mainnetTokens.usdt, mainnetTokens.usdc],
  [ChainId.TESTNET]: [testnetTokens.ring, testnetTokens.wbnb],
  [ChainId.DARWINIA]: [darwiniaTokens.kton, darwiniaTokens.wbnb],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.xwring, mainnetTokens.wbnb, mainnetTokens.usdt, mainnetTokens.usdc],
  [ChainId.TESTNET]: [testnetTokens.ring, testnetTokens.wbnb],
  [ChainId.DARWINIA]: [darwiniaTokens.kton, darwiniaTokens.wbnb],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [[mainnetTokens.xwring, mainnetTokens.wbnb]],
  [ChainId.TESTNET]: [[testnetTokens.ring, testnetTokens.wbnb]],
  [ChainId.DARWINIA]: [[darwiniaTokens.kton, darwiniaTokens.wbnb]],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much CRAB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 CRAB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

export { default as farmsConfig } from './farms'
