import React, { useState } from 'react'
import { CloseIcon, DropDownContainer, StyledSelect } from './styles'
import { Checkbox } from '~/components/shared'

interface ISelectOptions {
  value: string
  label: string
}

interface IProps {
  options: ISelectOptions[]
}

const DropDown: React.FC<IProps> = ({ options }) => {
  const [currentValues, setCurrentValues] = useState<string[]>([])

  const getValue = () => {
    if (currentValues) {
      return options.filter((option) => currentValues.indexOf(option.value) >= 0)
    } else {
      return []
    }
  }

  const handleChange = (values: ISelectOptions[]) => {
    setCurrentValues(values.map((value) => value.value))
  }

  const customContentRenderer = (props: any) => (
    <span>Difficulty {props.state.values.length ? `(${props.state.values.length})` : ''}</span>
  )

  const customItemRender = (props: any) => (
    <div onChange={() => props.methods.addItem(props.item)}>
      <Checkbox label={props.item.label} checked={props.methods.isSelected(props.item)} />
    </div>
  )

  const customClearRenderer = (props: any) => props.state.values.length && <CloseIcon />

  return (
    <DropDownContainer>
      <StyledSelect
        values={getValue()}
        onChange={handleChange}
        contentRenderer={customContentRenderer}
        itemRenderer={customItemRender}
        clearRenderer={customClearRenderer}
        options={options}
        multi
      ></StyledSelect>
    </DropDownContainer>
  )
}

export default React.memo(DropDown)
