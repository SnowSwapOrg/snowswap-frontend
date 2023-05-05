import { Currency, Token, ETHER } from '@snowswap/sdk'
import { NATIVE_TOKEN_SYMBOL } from 'config'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return NATIVE_TOKEN_SYMBOL
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
