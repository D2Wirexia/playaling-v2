import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { CheckboxInput, CheckboxLabel } from '~/components/shared/Checkbox/styles'
import { ReactComponent as Close } from '@/icons/close.svg'
import { ReactComponent as ArrowIcon } from '@/icons/down-arrow.svg'

interface IContainerProps {
  isActive: boolean
}

export const UpIcon = styled(ArrowIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  transform: rotateX(180deg);

  path {
    fill: ${Color.Mandarin};
  }
`

export const DownIcon = styled(ArrowIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 4px;

  path {
    fill: ${Color.Quartz};
  }
`

export const CloseIcon = styled(Close)`
  width: 10px;
  height: 10px;

  path {
    fill: ${Color.Mandarin};
  }
`

export const Option = styled.div<IContainerProps>`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? Color.Mandarin : Color.Quartz)};
`

export const Placeholder = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: ${Color.Quartz};
`

export const DropDownContainer = styled.div<IContainerProps>`
  width: 140px;
  height: 42px;

  div:first-of-type {
    height: 100%;
  }

  .react-dropdown-select {
    border: 1px solid ${({ isActive }) => (isActive ? Color.Mandarin : Color.LightPeriwinkle)};
    border-radius: 7px;
    padding: 0 6px 0 10px;
    outline: none;
    box-shadow: none;
    height: 100%;

    &:hover,
    &:focus {
      border-color: ${Color.Mandarin};
      box-shadow: none;
    }

    .react-dropdown-select-content {
      ${Placeholder} {
        display: flex;
        align-items: center;
        color: ${({ isActive }) => isActive && Color.Mandarin};
      }
    }

    .react-dropdown-select-dropdown {
      width: fit-content;
      min-width: 140px;
      padding: 10px;
      border: 1px solid ${Color.LightPeriwinkle};
      border-radius: 7px;
      box-shadow: none;
      display: flex;
      gap: 10px;

      ${CheckboxLabel} {
        font-weight: 600;

        &:hover {
          color: ${Color.Mandarin};
        }
      }

      ${CheckboxInput}:checked {
        & + ${CheckboxLabel} {
          color: ${Color.Mandarin};
        }
      }
    }

    .react-dropdown-select-dropdown-handle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      position: relative;
      width: 16px;
      height: 16px;

      ${({ isActive }) =>
        isActive &&
        css`
          svg path {
            fill: ${Color.Mandarin};
          }
        `}
    }
  }
`
