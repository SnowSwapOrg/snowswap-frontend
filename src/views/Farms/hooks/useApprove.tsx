import React, { useCallback, useEffect, useState } from 'react'
import { ethers, Contract } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { ToastDescriptionWithTx } from 'components/Toast'

// Approve Farms
export const useFarmApprove = (farmContract: Contract, token: Contract, setLastUpdated: () => void) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { callWithGasPrice } = useCallWithGasPrice()

  const handleApprove = async () => {
    const tx = await callWithGasPrice(token, 'approve', [farmContract.address, ethers.constants.MaxUint256])
    setRequestedApproval(true)
    const receipt = await tx.wait()
    if (receipt.status) {
      toastSuccess(
        t('Contract Enabled'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('You can now stake in farm')}
        </ToastDescriptionWithTx>,
      )
      setLastUpdated()
      setRequestedApproval(false)
    } else {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setRequestedApproval(false)
    }
  }

  return { handleApprove, requestedApproval }
}
