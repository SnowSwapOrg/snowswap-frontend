import { NATIVE_TOKEN_SYMBOL, CHAIN_ID } from 'config'

const getTokenLogoURL = (address: string) => `/images/tokens/${CHAIN_ID}/${address}.png`

export const getNativeTokenLogoURL = () => `/images/tokens/${CHAIN_ID}/${NATIVE_TOKEN_SYMBOL}.svg`

export default getTokenLogoURL
