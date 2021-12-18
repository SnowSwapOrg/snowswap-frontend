import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@snowswap/uikit'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        {/* <LogoIcon width="64px" mb="8px" /> */}
        {/* <Heading scale="xxl"></Heading> */}
        <Heading scale="xxl" mb="30px">
          SNOW SWAP 🏂
        </Heading>
        {/* <Text mb="16px">{t('Oops, page not found.')}</Text> */}
        <Button as={Link} to="/swap" scale="sm">
          {t('Start')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
