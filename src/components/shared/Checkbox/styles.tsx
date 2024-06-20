import styled from 'styled-components'
import { Color } from '~/constants'

export const CheckboxLabel = styled.label`
  display: flex;
  cursor: pointer;
  max-width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.Quartz};

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${Color.CoolGray};
    margin-right: 6px;
  }

  svg {
    position: absolute;
    top: 38%;
    left: 17%;
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${CheckboxLabel}::before {
    background-color: ${Color.Mandarin};
    border: 1px solid ${Color.Mandarin};
  }

  &:disabled:checked {
    & + ${CheckboxLabel}::before {
      background-color: ${Color.LightPeriwinkle};
      border: 1px solid ${Color.LightPeriwinkle};
    }

    & + ${CheckboxLabel} svg path {
      stroke: ${Color.AzureWhite};
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
