import styled from 'styled-components'
import { Color } from '~/constants'
import Select from 'react-dropdown-select'
import { ReactComponent as Close } from '@/icons/close.svg'
import { CheckboxLabel } from '~/components/shared/Checkbox/styles'

export const CloseIcon = styled(Close)`
  width: 10px;
  height: 10px;
`

export const StyledSelect = styled(Select)`
  border: 1px solid ${Color.LightPeriwinkle};
  border-radius: 7px;

  .react-dropdown-select-content {
    span {
      font-size: 16px;
      line-height: 22px;
      color: ${Color.Quartz};
    }
  }

  .react-dropdown-select-dropdown {
    width: 300px;
    padding: 10px;
    border: 1px solid ${Color.LightPeriwinkle};
    border-radius: 7px;

    div {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      ${CheckboxLabel}:hover {
        color: #eb7d5a;
      }
    }
  }
`

export const DropDownContainer = styled.div`
  width: 170px;
  height: 46px;
`
