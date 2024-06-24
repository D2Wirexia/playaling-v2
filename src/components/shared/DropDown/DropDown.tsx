import React, { useState } from 'react'
import { CloseIcon, DownIcon, DropDownContainer, UpIcon } from './styles'
import { Checkbox } from '~/components/shared'
import Select from 'react-dropdown-select'

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

  const customContentRenderer = (prop: any) => (
    <span>Difficulty {prop.state.values.length ? `(${prop.state.values.length})` : null}</span>
  )

  const customItemRender = (prop: any) => (
    <div onChange={() => prop.methods.addItem(prop.item)}>
      <Checkbox label={prop.item.label} checked={prop.methods.isSelected(prop.item)} />
    </div>
  )

  const customClearRenderer = (prop: any) =>
    prop.state.values.length ? <CloseIcon onClick={prop.methods.clearAll} /> : null

  const customDropdownHandleRenderer = (prop: any) =>
    prop.state.dropdown ? <UpIcon /> : <DownIcon />

  return (
    <DropDownContainer isActive={currentValues.length !== 0}>
      <Select
        values={getValue()}
        onChange={handleChange}
        contentRenderer={customContentRenderer}
        itemRenderer={customItemRender}
        clearRenderer={customClearRenderer}
        dropdownHandleRenderer={customDropdownHandleRenderer}
        options={options}
        multi
        clearable
      ></Select>
    </DropDownContainer>
  )
}

export default React.memo(DropDown)
