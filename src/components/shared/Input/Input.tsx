import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  BottomContainer,
  Error,
  Hint,
  Info,
  InputContainer,
  InputField,
  InputWrapper,
  Label,
  RightContainer,
  TopContent,
} from './styles'
import { ReactComponent as EyeShowIcon } from '@/icons/eye-show.svg'
import { ReactComponent as EyeHideIcon } from '@/icons/eye-hide.svg'
import { emojiRegex } from '~/constants'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  register: any
  hint?: string | React.ReactNode
  action?: React.ReactNode
  info?: string | null
  error?: string | null
  clearError?: () => void
}

const Input: React.FC<IProps> = ({
  label,
  register,
  hint,
  action,
  type,
  info,
  error,
  clearError,
  ...props
}) => {
  const { onChange, ...restRegister } = register

  const [inputType, setInputType] = useState<React.HTMLInputTypeAttribute | undefined>(type)
  const actionRef = useRef<HTMLDivElement>(null)

  const handleChangeShowPassword = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'))
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      e.target.value = e.target.value.replace(emojiRegex, '')
      !!clearError && clearError()
      onChange(e)
    },
    [onChange, clearError],
  )

  const inputPaddingRight: number = useMemo(() => {
    if (!actionRef.current) return 15
    return actionRef.current.getBoundingClientRect().width + 25
  }, [actionRef.current])

  return (
    <InputWrapper>
      <TopContent>
        <Label>{label}</Label>
        {hint && <Hint>{hint}</Hint>}
      </TopContent>
      <InputContainer>
        <InputField
          {...props}
          type={inputType}
          {...restRegister}
          onChange={handleChange}
          style={{ paddingRight: inputPaddingRight + 'px' }}
          isError={!!error}
        />
        {type === 'password' && (
          <RightContainer ref={actionRef}>
            {inputType === 'text' && <EyeHideIcon onClick={handleChangeShowPassword} />}
            {inputType === 'password' && <EyeShowIcon onClick={handleChangeShowPassword} />}
          </RightContainer>
        )}
        {!!action && <RightContainer ref={actionRef}>{action}</RightContainer>}
      </InputContainer>
      <BottomContainer>
        {info && <Info>{info}</Info>}
        {error && <Error>{error}</Error>}
        {!info && !error && <>&nbsp;</>}
      </BottomContainer>
    </InputWrapper>
  )
}

export default React.memo(Input)
