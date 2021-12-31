import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Snowswap',
  description: 'The most popular AMM on CRAB by user count! ',
  image: 'https://snowswap.xyz/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Snowswap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Snowswap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Snowswap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Snowswap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Snowswap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Snowswap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Snowswap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Snowswap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Snowswap')}`,
      }
    default:
      return null
  }
}
