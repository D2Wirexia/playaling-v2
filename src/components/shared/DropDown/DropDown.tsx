import React, { useEffect, useState } from 'react'
import { CloseIcon, DownIcon, DropDownContainer, Option, Placeholder, UpIcon } from './styles'
import { Checkbox } from '~/components/shared'
import Select, { type SelectItemRenderer, type SelectRenderer } from 'react-dropdown-select'

interface IOptions {
  value: string
  label: string
}

interface IProps {
  placeholder: string
  options: IOptions[]
  activeOptions: string[]
  onChange: (options: string[]) => void
  multi?: boolean
}

const DropDown: React.FC<IProps> = ({
  placeholder,
  options,
  activeOptions,
  onChange,
  multi = false,
}) => {
  const [currentValues, setCurrentValues] = useState<IOptions[]>(options)

  useEffect(() => {
    setCurrentValues(
      options.reduce((prev: IOptions[], cur: IOptions) => {
        if (activeOptions.some((opt: string) => opt === cur.value)) prev.push(cur)
        return prev
      }, []),
    )
  }, [options, activeOptions])

  const handleChange = (values: IOptions[]) => {
    onChange(values.map((v: IOptions) => v.value))
  }

  const customContentRenderer = ({ state }: SelectRenderer<IOptions>): React.ReactElement => {
    if (!multi) {
      let content: string = placeholder
      if (!!activeOptions.length) {
        content = options.find((option: IOptions) => option.value === activeOptions[0])!.label
      }
      return <Placeholder>{content}</Placeholder>
    }
    let content: string = placeholder
    const countActiveOption: number = state.values.length
    if (!!countActiveOption) {
      content += ` (${countActiveOption})`
    }
    return <Placeholder>{content}</Placeholder>
  }

  const customItemRender = ({
    item,
    methods,
  }: SelectItemRenderer<IOptions>): React.ReactElement => {
    if (!multi) {
      return (
        <Option onClick={() => methods.addItem(item)} isActive={item.value === activeOptions[0]}>
          {item.label}
        </Option>
      )
    }
    return (
      <Checkbox
        label={item.label}
        checked={methods.isSelected(item)}
        onChange={() => methods.addItem(item)}
      />
    )
  }

  const customClearRenderer = ({
    state,
    methods,
  }: SelectRenderer<IOptions>): React.ReactElement => {
    return state.values.length ? <CloseIcon onClick={methods.clearAll} /> : <React.Fragment />
  }

  const customDropdownHandleRenderer = ({
    state,
  }: SelectRenderer<IOptions>): React.ReactElement => {
    return state.dropdown ? <UpIcon /> : <DownIcon />
  }

  return (
    <DropDownContainer isActive={!!currentValues.length}>
      <Select
        values={currentValues}
        options={options}
        onChange={handleChange}
        contentRenderer={customContentRenderer}
        itemRenderer={customItemRender}
        clearRenderer={customClearRenderer}
        dropdownHandleRenderer={customDropdownHandleRenderer}
        multi={multi}
        clearable
      />
    </DropDownContainer>
  )
}

export default React.memo(DropDown)
