// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Button, Text, Flex, ChevronDownIcon, useDelayedUnmount, useMatchBreakpoints } from '@snowswap/uikit'
import { SerializedFarmConfig } from 'config/constants/types'
import { useFarmChefContract, useFarmStakerContract } from 'hooks/useContract'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import { getAddress } from 'utils/addressHelpers'
import { NumericalInput } from 'components/NumericalInput'
import { parseUnits } from 'ethers/lib/utils'
import useTokenAllowance from 'hooks/useTokenAllowance'
import { Token } from '@snowswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import { useTranslation } from 'contexts/Localization'
import { getLpContract } from 'utils/contractHelpers'
import { TokenImage } from 'components/TokenImage'
import { useFarmChefGetStakerAddress } from '../hooks/useFarmChef'
import {
  useFarmStakerBalanceOf,
  useFarmStakerEarned,
  useFarmStakerTotalSupply,
  useHarvestFarms,
  useStakeFarms,
  useUnstakeFarms,
} from '../hooks/useFarmStaker'
import { useFarmApprove } from '../hooks/useApprove'

export interface Props {
  farm: SerializedFarmConfig
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
  margin-top: 10px;
`

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
`

const BackgroundTD = styled.td`
  background: ${({ theme }) => theme.colors.background};
`

const LiquidityBox = styled(Flex)`
  border-radius: 10px;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  height: 20px;
  cursor: pointer;
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  td {
    padding: 20px;
  }
`

const StyledMobileTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  div {
    font-size: 12px;
  }
  td {
    padding: 8px;
  }
`

const FarmCard: React.FC<Props> = ({ farm }) => {
  const { t } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()

  const { account, chainId, library } = useActiveWeb3React()

  const [stakeValue, setStakeValue] = useState<string>('')
  const [unstakeValue, setUnstakeValue] = useState<string>('')

  const farmChef = useFarmChefContract()
  const stakerAddress = farm.poolAddress
  console.log('🚀 ~ file: FarmCard.tsx ~ line 119 ~ stakerAddress', stakerAddress)

  const farmStakerContract = useFarmStakerContract(stakerAddress, true)
  const totalSupply = useFarmStakerTotalSupply(farmStakerContract)
  const myStaking = useFarmStakerBalanceOf(farmStakerContract, account)
  const earned = useFarmStakerEarned(farmStakerContract, account)
  const lpBalance = useTokenBalance(getAddress(farm.lpAddresses))

  const { onStake } = useStakeFarms(farmStakerContract)
  const { onUnstake } = useUnstakeFarms(farmStakerContract)
  const { onHarvest } = useHarvestFarms(farmStakerContract)

  const [actionPanelExpanded, setActionPanelExpanded] = useState(false)
  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)

  const allowance = useTokenAllowance(
    new Token(chainId, getAddress(farm.lpAddresses), 18),
    account,
    farmStakerContract?.address,
  )
  const isNeedApprove =
    BigNumber.from(allowance?.raw.toString() || '0').eq(0) ||
    BigNumber.from(allowance?.raw.toString() || '0').lt(parseUnits(stakeValue.toString() || '0', 18))

  const { handleApprove, requestedApproval } = useFarmApprove(
    farmStakerContract,
    getLpContract(getAddress(farm.lpAddresses), library.getSigner()),
    () => {
      console.log(11)
    },
  )

  const handleRenderRow = () => {
    if (isMobile) {
      return (
        <StyledMobileTr onClick={toggleActionPanel}>
          <td>
            <Flex width="50px">
              <TokenImage
                width={25}
                height={25}
                token={new Token(farm.token.chainId, farm.token.address, farm.token.decimals)}
              />
              <TokenImage
                ml="-5px"
                width={25}
                height={25}
                token={new Token(farm.quoteToken.chainId, farm.quoteToken.address, farm.quoteToken.decimals)}
              />
            </Flex>
          </td>
          <td>
            <Text>{farm.lpSymbol}</Text>
          </td>
          <td>
            <Label>Unclaimed</Label>
            <Text>
              {getFullDisplayBalance(earned, farm.rewardToken.decimals, 4)} {farm.rewardToken.symbol}
            </Text>
          </td>
          <td>
            <ArrowIcon color="primary" toggled={actionPanelExpanded} />
          </td>
        </StyledMobileTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <Flex width="60px">
            <TokenImage
              width={30}
              height={30}
              token={new Token(farm.token.chainId, farm.token.address, farm.token.decimals)}
            />
            <TokenImage
              ml="-10px"
              width={30}
              height={30}
              token={new Token(farm.quoteToken.chainId, farm.quoteToken.address, farm.quoteToken.decimals)}
            />
          </Flex>
        </td>
        <td>
          <Text>{farm.lpSymbol}</Text>
        </td>
        <td>
          <Label>Total</Label>
          <Text>{getFullDisplayBalance(totalSupply, 18, 4)}</Text>
        </td>
        <td>
          <Label>My Staking</Label>
          <Text>{getFullDisplayBalance(myStaking, 18, 4)}</Text>
        </td>
        <td>
          <Label>Unclaimed</Label>
          <Text>
            {getFullDisplayBalance(earned, farm.rewardToken.decimals, 4)} {farm.rewardToken.symbol}
          </Text>
        </td>
        <td>
          <ArrowIcon color="primary" toggled={actionPanelExpanded} />
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <BackgroundTD colSpan={6}>
            <Container expanded={shouldRenderChild}>
              <Flex justifyContent="space-between" width="100%" flexDirection={isMobile ? 'column' : 'row'}>
                <LiquidityBox flex="1" mx="0.25rem" mb="1rem" flexDirection="column">
                  <Flex pb="0.7rem" justifyContent="space-between">
                    <Label>Stake</Label>
                    <Label>Wallet Balance: {getFullDisplayBalance(lpBalance.balance, 18, 6)} </Label>
                  </Flex>
                  <Flex pb="0.7rem">
                    <NumericalInput
                      placeholder="0"
                      value={stakeValue}
                      onUserInput={(e) => {
                        setStakeValue(e)
                      }}
                    />
                  </Flex>
                  <Flex>
                    {isNeedApprove ? (
                      <Button
                        width="100%"
                        scale="sm"
                        disabled={requestedApproval}
                        onClick={handleApprove}
                        variant="secondary"
                      >
                        {t('Enable')}
                      </Button>
                    ) : (
                      <Button
                        width="100%"
                        scale="sm"
                        onClick={() => {
                          onStake(parseUnits(stakeValue.toString(), 18).toString())
                        }}
                      >
                        Stake
                      </Button>
                    )}
                  </Flex>
                </LiquidityBox>

                <LiquidityBox flex="1" mx="0.25rem" mb="1rem" flexDirection="column">
                  <Flex pb="0.7rem" justifyContent="space-between">
                    <Label>Unstake</Label>
                    <Label>My Staking: {getFullDisplayBalance(myStaking, 18, 6)}</Label>
                  </Flex>
                  <Flex pb="0.7rem">
                    <NumericalInput
                      placeholder="0"
                      value={unstakeValue}
                      onUserInput={(e) => {
                        setUnstakeValue(e)
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Button
                      width="100%"
                      scale="sm"
                      onClick={() => {
                        onUnstake(parseUnits(unstakeValue.toString(), 18).toString())
                      }}
                    >
                      Unstake
                    </Button>
                  </Flex>
                </LiquidityBox>

                <LiquidityBox flexDirection="column" mb="1rem" mx="0.25rem">
                  <Flex pb="0.7rem">
                    <Text>
                      {getFullDisplayBalance(earned, farm.rewardToken.decimals, 4)} {farm.rewardToken.symbol}
                    </Text>
                  </Flex>
                  <Flex>
                    <Button width="100%" scale="sm" onClick={onHarvest}>
                      Claim
                    </Button>
                  </Flex>
                </LiquidityBox>
              </Flex>
            </Container>
          </BackgroundTD>
        </tr>
      )}
    </>
  )
}

export default FarmCard
