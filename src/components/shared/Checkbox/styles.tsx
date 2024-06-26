import styled from 'styled-components'
import { Color } from '~/constants'
import { ReactComponent as Checkmark } from '@/icons/checkmark.svg'

export const LabelName = styled.span`
  margin-left: 6px;
`

export const CheckmarkIcon = styled(Checkmark)`
  position: absolute;
  top: 6px;
  left: 4px;
  width: 12px;
  height: auto;
  opacity: 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  cursor: pointer;
  max-width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.Quartz};
  position: relative;

  &::before {
    content: '';
    min-width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${Color.CoolGray};
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked {
    & + ${CheckboxLabel}::before {
      background-color: ${Color.Mandarin};
      border: 1px solid ${Color.Mandarin};
    }

    & + ${CheckboxLabel} ${CheckmarkIcon} {
      opacity: 1;
    }
  }

  &:disabled:checked {
    & + ${CheckboxLabel}::before {
      background-color: ${Color.LightPeriwinkle};
      border: 1px solid ${Color.LightPeriwinkle};
    }

    & + ${CheckboxLabel} ${CheckmarkIcon} {
      opacity: 1;

      path {
        stroke: ${Color.AzureWhite};
      }
    }
  }

  &:disabled + ${CheckboxLabel}::before {
    background-color: ${Color.AzureWhite};
    border: 1px solid ${Color.LightPeriwinkle};
  }
`

export const CheckboxContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`
