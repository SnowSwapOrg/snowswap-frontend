import { ChainId, Token } from '@snowswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wbnb: new Token(
    MAINNET,
    '0x2D2b97EA380b0185e9fDF8271d1AFB5d2Bf18329',
    18,
    'WCRAB',
    'Wrapped CRAB',
    'https://crab.network/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency CRAB is required, conditional checks for the symbol 'CRAB' can be used
  bnb: new Token(MAINNET, '0x2D2b97EA380b0185e9fDF8271d1AFB5d2Bf18329', 18, 'CRAB', 'CRAB', 'https://crab.network/'),
  ring: new Token(
    MAINNET,
    '0x7399Ea6C9d35124d893B8d9808930e9d3F211501',
    9,
    'xRING',
    'Darwinia Network Native Token',
    'https://darwinia.network/',
  ),
  usdt: new Token(
    MAINNET,
    '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98',
    6,
    'USDT',
    'cBridge - USD Coin',
    'https://cbridge.celer.network',
  ),
  usdc: new Token(
    MAINNET,
    '0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c',
    6,
    'USDC',
    'cBridge - USD Coin',
    'https://cbridge.celer.network',
  ),
  testring: new Token(MAINNET, '0x9aC276FBcb568Eb9f4679B238efd1b6eA1898435', 9, 'testRING', 'testRING', ''),
}

export const testnetTokens = {
  wbnb: new Token(
    TESTNET,
    '0xF436Ae756f46F2ac547A870c71898eA5915F2F9E',
    18,
    'WCRAB',
    'Wrapped CRAB',
    'https://crab.network/',
  ),
  ring: new Token(
    TESTNET,
    '0xc8F2eC4c01AD7cDF27431983546da0c35E40237c',
    18,
    'RING',
    'Darwinia Network Native Token',
    'https://darwinia.network/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
