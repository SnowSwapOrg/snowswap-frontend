import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@snowswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import useTheme from 'hooks/useTheme'
import useSwitchUserChainId from 'hooks/useSwitchUserChainId'
import { usePhishingBannerManager } from 'state/user/hooks'
import { ChainId } from '@snowswap/sdk'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { setUserChainId } = useSwitchUserChainId()
  const { pathname } = useLocation()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      banner={showPhishingWarningBanner && <PhishingWarningBanner />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={0}
      links={config(t)}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy CAKE')}
      userChainIds={[
        {
          text: 'Darwinia Chain',
          link: 'https://darwinia.snowswap.xyz',
          chainId: ChainId.DARWINIA,
        },
        {
          text: 'Crab Chain',
          link: 'https://snowswap.xyz',
          chainId: ChainId.MAINNET,
        },
      ]}
      setUserChainId={setUserChainId}
      {...props}
    />
  )
}

export default Menu
