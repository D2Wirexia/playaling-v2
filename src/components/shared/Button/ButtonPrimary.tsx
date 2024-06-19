import React from 'react'
import { TargetContainer } from './styles'
import { ButtonProps } from './Button'
import { Spinner } from '~/components/shared'

const ButtonPrimary: React.FC<ButtonProps> = ({ label, isLoading, ...props }) => {
  return (
    <TargetContainer view="primary" isLoading={isLoading} {...props}>
      {isLoading && <Spinner />}
      {!isLoading && label}
    </TargetContainer>
  )
}

export default React.memo(ButtonPrimary)
