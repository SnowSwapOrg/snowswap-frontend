import { MenuItemsType, DropdownMenuItemType, menuStatus } from '@snowswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn ( Plan )'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Earn ( Plan )'),
        href: '/farms',
      },
    ],
  },
]

export default config
