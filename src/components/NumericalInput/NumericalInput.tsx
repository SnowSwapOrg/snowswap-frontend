import React from 'react'
import styled from 'styled-components'
import { Input } from '@snowswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { escapeRegExp } from '../../utils'

const StyledInput = styled(Input)<{ error?: boolean; fontSize?: string; align?: string }>`
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  text-align: ${({ align }) => align && align};
  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

export const NumericalInput = React.memo(function InnerInput({
  value,
  onUserInput,
  placeholder,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  error?: boolean
  fontSize?: string
  align?: 'right' | 'left'
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }

  const { t } = useTranslation()

  return (
    <StyledInput
      {...rest}
      value={value}
      onChange={(event) => {
        // replace commas with periods, because we exclusively uses period as the decimal separator
        enforcer(event.target.value.replace(/,/g, '.'))
      }}
      // universal input options
      inputMode="decimal"
      title={t('Token Amount')}
      autoComplete="off"
      autoCorrect="off"
      // text-specific options
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  )
})

export default Input
