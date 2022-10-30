// const PANCAKE_EXTENDED = ``
// const PANCAKE_TOP100 = ``
const EVOLUTIONLAND = `https://v2.evolution.land/tokenlists/crab.evolutionland.tokenlist.json`

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  // PANCAKE_TOP100,
  // PANCAKE_EXTENDED,
  EVOLUTIONLAND,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
