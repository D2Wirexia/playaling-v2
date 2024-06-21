import React, { useId } from 'react'
import {
  SelectorButtonContainer,
  SelectorButtonLabel,
  SelectorButtonRadio,
} from '~/components/shared/SelectorButton/styles'

export interface ISelectorButtonValues {
  key: string | number
  label: string
}

interface IProps {
  values: ISelectorButtonValues[]
  activeValue: string | number | null
  onChange: (key: string | number) => void
}

const SelectorButton: React.FC<IProps> = ({ values, activeValue, onChange }) => {
  const name: string = useId()

  return (
    <SelectorButtonContainer>
      {values.map(({ key, label }) => {
        return (
          <>
            <SelectorButtonLabel isActive={activeValue === key} onChange={() => onChange(key)}>
              <SelectorButtonRadio
                key={key}
                type="radio"
                name={name}
                checked={activeValue === key}
              />
              {label}
            </SelectorButtonLabel>
          </>
        )
      })}
    </SelectorButtonContainer>
  )
}

export default React.memo(SelectorButton)
