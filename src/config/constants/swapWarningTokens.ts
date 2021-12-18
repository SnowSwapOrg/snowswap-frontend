import { Token } from '@snowswap/sdk'
import tokens from 'config/constants/tokens'

const { bondly, safemoon, ring } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  // ring
}

export default SwapWarningTokens
