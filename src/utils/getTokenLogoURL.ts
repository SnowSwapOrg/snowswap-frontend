import { NATIVE_TOKEN_SYMBOL } from 'config'

const getTokenLogoURL = (address: string) => `/images/tokens/${address}.png`

export const getNativeTokenLogoURL = () => `/images/tokens/${NATIVE_TOKEN_SYMBOL}.svg`

export default getTokenLogoURL
