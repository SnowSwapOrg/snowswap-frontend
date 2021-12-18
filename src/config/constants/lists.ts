const PANCAKE_EXTENDED = `{
  "name": "PancakeSwap Extended",
  "timestamp": "2021-12-10T11:44:02.739Z",
  "version": {
    "major": 2,
    "minor": 16,
    "patch": 50
  },
  "logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
  "keywords": [
    "pancakeswap",
    "extended"
  ],
  "tokens": [
  ]
}`

const PANCAKE_TOP100 = `{
  "name": "PancakeSwap Extended",
  "timestamp": "2021-12-10T11:44:02.739Z",
  "version": {
    "major": 2,
    "minor": 16,
    "patch": 50
  },
  "logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
  "keywords": [
    "pancakeswap",
    "extended"
  ],
  "tokens": [
  ]
}`

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_TOP100,
  PANCAKE_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
