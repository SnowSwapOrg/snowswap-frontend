import { ChainId } from '@snowswap/sdk'
import { CHAIN_ID } from 'config'
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import AddLiquidity from './index'

export function RedirectToAddLiquidity() {
  return <Redirect to="/add/" />
}

const OLD_PATH_STRUCTURE = {
  [ChainId.MAINNET]: /^(0x[a-fA-F0-9]{40}|CRAB)-(0x[a-fA-F0-9]{40}|CRAB)$/,
  [ChainId.TESTNET]: /^(0x[a-fA-F0-9]{40}|HT)-(0x[a-fA-F0-9]{40}|HT)$/,
  [ChainId.DARWINIA]: /^(0x[a-fA-F0-9]{40}|RING)-(0x[a-fA-F0-9]{40}|RING)$/,
}
export function RedirectOldAddLiquidityPathStructure(props: RouteComponentProps<{ currencyIdA: string }>) {
  const {
    match: {
      params: { currencyIdA },
    },
  } = props
  const match = currencyIdA.match(OLD_PATH_STRUCTURE[CHAIN_ID])
  if (match?.length) {
    return <Redirect to={`/add/${match[1]}/${match[2]}`} />
  }

  return <AddLiquidity {...props} />
}

export function RedirectDuplicateTokenIds(props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
  const {
    match: {
      params: { currencyIdA, currencyIdB },
    },
  } = props
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/add/${currencyIdA}`} />
  }
  return <AddLiquidity {...props} />
}
