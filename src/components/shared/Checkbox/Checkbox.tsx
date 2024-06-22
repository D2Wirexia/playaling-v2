import React, { useId } from 'react'
import { CheckboxContainer, CheckboxInput, CheckboxLabel, CheckmarkIcon, LabelName } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
}

const Checkbox: React.FC<IProps> = ({ label, ...props }) => {
  const id: string = useId()

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...props} id={id} />
      <CheckboxLabel htmlFor={id}>
        <CheckmarkIcon />
        {label && <LabelName>{label}</LabelName>}
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

export default React.memo(Checkbox)
