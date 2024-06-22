import React, { useCallback, useId, useState } from 'react'
import { SelectorButtonContainer, SelectorButtonLabel, SelectorButtonRadio } from './styles'

export interface ISelectorButtonValues<K> {
  key: K
  label: string
}

interface IProps<K> {
  values: ISelectorButtonValues<K>[]
  activeValue: K | null
  onChange: (key: K) => void
}

const SelectorButton = <K extends NonNullable<string>>({
  activeValue,
  values,
  onChange,
}: IProps<K>) => {
  const name: string = useId()
  const [focusedKey, setFocusedKey] = useState<K | null>(null)

  const handleFocus = useCallback(
    (key: K) => {
      setFocusedKey(key)
      onChange(key)
    },
    [onChange],
  )

  const handleBlur = useCallback(() => {
    setFocusedKey(null)
  }, [])

  return (
    <SelectorButtonContainer>
      {values.map(({ key, label }) => {
        return (
          <SelectorButtonLabel
            key={key}
            isActive={activeValue === key}
            isFocus={focusedKey === key}
            onChange={() => onChange(key)}
            onClick={handleBlur}
          >
            <SelectorButtonRadio
              type="radio"
              name={name}
              checked={activeValue === key}
              onChange={() => onChange(key)}
              onFocus={() => handleFocus(key)}
              onBlur={handleBlur}
            />
            {label}
          </SelectorButtonLabel>
        )
      })}
    </SelectorButtonContainer>
  )
}

export default React.memo(SelectorButton)
