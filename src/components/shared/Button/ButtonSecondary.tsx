import React from 'react'
import { TargetContainer } from './styles'
import { ButtonProps } from './Button'
import { Spinner } from '~/components/shared'

const ButtonSecondary: React.FC<ButtonProps> = ({ label, isLoading, ...props }) => {
  return (
    <TargetContainer view="secondary" isLoading={isLoading} {...props}>
      {isLoading && <Spinner />}
      {!isLoading && label}
    </TargetContainer>
  )
}

export default React.memo(ButtonSecondary)
