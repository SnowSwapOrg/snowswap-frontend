import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import { farmsConfig } from 'config/constants'
import { getAddress } from 'utils/addressHelpers'
import { FarmCard } from './components'

const StyledNotFound = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 64px); */
  justify-content: flex-start;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 20px 20px 0 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.colors.text};
`

const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`

const Farms = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <StyledTable>
          <TableBody>
            {farmsConfig.map((farm) => {
              const lpAddress = getAddress(farm.lpAddresses)
              if (!lpAddress) return null
              return <FarmCard key={farm.pid} farm={farm} />
            })}
          </TableBody>
        </StyledTable>
      </StyledNotFound>
    </Page>
  )
}

export default Farms
