import { Currency, ETHER, Token } from '@snowswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CRAB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
