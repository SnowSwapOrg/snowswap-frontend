// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Button, Text, Flex, ChevronDownIcon, useDelayedUnmount, useMatchBreakpoints, Box } from '@snowswap/uikit'
import { SerializedFarmConfig } from 'config/constants/types'
import { useFarmStakerContract } from 'hooks/useContract'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { formatBigNumber, getFullDisplayBalance } from 'utils/formatBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import useTotalSupply from 'hooks/useTotalSupply'
import { getAddress } from 'utils/addressHelpers'
import { NumericalInput } from 'components/NumericalInput'
import { parseUnits } from 'ethers/lib/utils'
import useTokenAllowance from 'hooks/useTokenAllowance'
import { Token } from '@snowswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import { useTranslation } from 'contexts/Localization'
import { getLpContract } from 'utils/contractHelpers'
import { TokenImage } from 'components/TokenImage'
import getTimePeriods from 'utils/getTimePeriods'
import formatTimePeriod from 'utils/formatTimePeriod'
import { useSingleTokenSwapInfoFromInput } from 'state/swap/hooks'
import tokens from 'config/constants/tokens'
import { usePair } from 'hooks/usePairs'
import { useCurrency } from 'hooks/Tokens'
import BigNumberJs from 'bignumber.js'
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
    max-height: 800px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 800px;
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
  /* flex-direction: column-reverse; */
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: column;
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
const StyledBalanceWithLink = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
`

const FarmCard: React.FC<Props> = ({ farm }) => {
  const { t } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const isExpired = (farm.startTime + farm.rewardsDuration) / 1000 < Date.now()

  const { account, chainId, library } = useActiveWeb3React()

  const [stakeValue, setStakeValue] = useState<string>('')
  const [unstakeValue, setUnstakeValue] = useState<string>('')

  const tokenPrice = useSingleTokenSwapInfoFromInput(
    farm.token.address,
    farm.token.address.toLowerCase() === tokens.usdt.address.toLowerCase() ? tokens.usdc.address : tokens.usdt.address,
  )
  const quoteTokenPrice = useSingleTokenSwapInfoFromInput(
    farm.quoteToken.address,
    farm.quoteToken.address.toLowerCase() === tokens.usdt.address.toLowerCase()
      ? tokens.usdc.address
      : tokens.usdt.address,
  )
  const rewardTokenPrice = useSingleTokenSwapInfoFromInput(
    farm.rewardToken.address,
    farm.rewardToken.address.toLowerCase() === tokens.usdt.address.toLowerCase()
      ? tokens.usdc.address
      : tokens.usdt.address,
  )

  const tokenCurrency = useCurrency(farm.token.address)
  const quoteTokenCurrency = useCurrency(farm.quoteToken.address)
  const [pairState, pair] = usePair(tokenCurrency ?? undefined, quoteTokenCurrency ?? undefined)
  const pairTotalSupply = useTotalSupply(pair?.liquidityToken)
  const tokenReserve = pair?.reserve0.token.address === farm.token.address ? pair?.reserve0 : pair?.reserve1
  const quoteTokenReserve = pair?.reserve0.token.address === farm.token.address ? pair?.reserve1 : pair?.reserve0

  const tokenValue = useMemo(() => {
    if (tokenPrice && tokenPrice[farm.token.address.toLowerCase()] && tokenReserve) {
      const price = new BigNumberJs(tokenPrice[farm.token.address.toLowerCase()])
      const amount = new BigNumberJs(
        formatBigNumber(
          BigNumber.from(tokenReserve.raw.toString()),
          tokenReserve.currency.decimals,
          tokenReserve.currency.decimals,
        ),
      )
      return price.times(amount)
    }
    return new BigNumberJs(0)
  }, [farm.token.address, tokenPrice, tokenReserve])

  const quoteTokenValue = useMemo(() => {
    if (quoteTokenPrice && quoteTokenPrice[farm.quoteToken.address.toLowerCase()] && quoteTokenReserve) {
      const price = new BigNumberJs(quoteTokenPrice[farm.quoteToken.address.toLowerCase()])
      const amount = new BigNumberJs(
        formatBigNumber(
          BigNumber.from(quoteTokenReserve.raw.toString()),
          quoteTokenReserve.currency.decimals,
          quoteTokenReserve.currency.decimals,
        ),
      )
      return price.times(amount)
    }
    return new BigNumberJs(0)
  }, [farm.quoteToken.address, quoteTokenPrice, quoteTokenReserve])

  const rewardTokenValue = useMemo(() => {
    if (rewardTokenPrice && rewardTokenPrice[farm.rewardToken.address.toLowerCase()]) {
      const price = new BigNumberJs(rewardTokenPrice[farm.rewardToken.address.toLowerCase()])
      const amount = new BigNumberJs(
        formatBigNumber(BigNumber.from(farm.rewardsAmount), farm.rewardToken.decimals, farm.rewardToken.decimals),
      )
      return price.times(amount)
    }
    return new BigNumberJs(0)
  }, [farm.rewardToken.address, farm.rewardToken.decimals, farm.rewardsAmount, rewardTokenPrice])

  const pairValueInPool = !tokenValue.eq(0) ? tokenValue.times(2) : quoteTokenValue.times(2)
  // console.log("🚀 ~ file: FarmCard.tsx ~ line 192 ~ pairValueInPool", tokenValue.toString(),quoteTokenValue.toString(), pairValueInPool.toString())

  const stakerAddress = farm.poolAddress

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
      console.log('success')
    },
  )

  const farmsStakingValue = pairValueInPool.times(totalSupply.div(pairTotalSupply?.raw.toString() || 0))

  // 31536000 = 3600 * 24 * 365
  const apr = isExpired
    ? 0
    : rewardTokenValue.div(new BigNumberJs(farm.rewardsDuration)).times(31536000).div(farmsStakingValue).times(100)

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
        {/* <td>
          <Label>{t('Total')}</Label>
          <Text>{getFullDisplayBalance(totalSupply, 18, 12)}</Text>
        </td> */}
        <td>
          <Label>{t('APR')}</Label>
          <Text>
            {apr.toFixed(2)}%{isExpired ? ' - Expired' : ''}
          </Text>
        </td>
        <td>
          <Label>{t('My Share')}</Label>
          <Text>
            {getFullDisplayBalance(myStaking, 18, 12)} (
            {myStaking.eq(0) ? '0' : myStaking.div(totalSupply).multipliedBy(100).toFixed(2)}%)
          </Text>
        </td>
        <td>
          <Label>{t('Unclaimed')}</Label>
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
                    <Label>{t('Stake')}</Label>
                    <Label>
                      {t('Balance')}:{' '}
                      <StyledBalanceWithLink
                        onClick={() => {
                          setStakeValue(getFullDisplayBalance(lpBalance.balance, 18, 18))
                        }}
                      >
                        {getFullDisplayBalance(lpBalance.balance, 18, 18)}
                      </StyledBalanceWithLink>{' '}
                    </Label>
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
                        disabled={
                          parseUnits(stakeValue.toString() || '0', 18).eq(BigNumber.from(0)) ||
                          parseUnits(stakeValue.toString() || '0', 18).gt(
                            BigNumber.from(lpBalance.balance.toString()),
                          ) ||
                          isExpired
                        }
                        onClick={() => {
                          onStake(parseUnits(stakeValue.toString() || '0', 18).toString())
                        }}
                      >
                        {t('Stake')}
                      </Button>
                    )}
                  </Flex>
                </LiquidityBox>

                <LiquidityBox flex="1" mx="0.25rem" mb="1rem" flexDirection="column">
                  <Flex pb="0.7rem" justifyContent="space-between">
                    <Label>{t('Unstake')}</Label>
                    <Label>
                      {t('My Share')}:{' '}
                      <StyledBalanceWithLink
                        onClick={() => {
                          setUnstakeValue(getFullDisplayBalance(myStaking, 18, 18))
                        }}
                      >
                        {getFullDisplayBalance(myStaking, 18, 18)}
                      </StyledBalanceWithLink>
                    </Label>
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
                      disabled={parseUnits(unstakeValue.toString() || '0', 18).gt(BigNumber.from(myStaking.toString()))}
                      onClick={() => {
                        onUnstake(parseUnits(unstakeValue.toString() || '0', 18).toString())
                      }}
                    >
                      {t('Unstake')}
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
                    <Button disabled={earned.eq(0)} width="100%" scale="sm" onClick={onHarvest}>
                      {t('Claim')}
                    </Button>
                  </Flex>
                </LiquidityBox>
              </Flex>
              <Box pb="2rem">
                <Label>{t('Earliest Start Time')}:</Label>
                <Text>{new Date(farm.startTime).toLocaleDateString(undefined)}</Text>
                <Label>{t('Rewards Duration')}:</Label>
                <Text>{formatTimePeriod(getTimePeriods(farm.rewardsDuration))}</Text>
                <Label>{t('APR')}:</Label>
                <Text>
                  {apr.toFixed(2)}%{isExpired ? ' - Expired' : ''}
                </Text>
              </Box>
            </Container>
          </BackgroundTD>
        </tr>
      )}
    </>
  )
}

export default FarmCard
