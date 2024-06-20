import React, { useId } from 'react'
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
}

const Checkbox: React.FC<IProps> = ({ label, ...props }) => {
  const id = useId()

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...props} id={id} />
      <CheckboxLabel htmlFor={id}>
        <svg
          width="12"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.80263L4.36562 7L10 1"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

export default React.memo(Checkbox)
