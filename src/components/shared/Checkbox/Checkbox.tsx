import React, { useId } from 'react'
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './styles'
import { ReactComponent as CheckmarkIcon } from '@/icons/checkmark.svg'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
}

const Checkbox: React.FC<IProps> = ({ label, ...props }) => {
  const id = useId()

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...props} id={id} />
      <CheckboxLabel htmlFor={id}>
        <CheckmarkIcon />
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

export default React.memo(Checkbox)
