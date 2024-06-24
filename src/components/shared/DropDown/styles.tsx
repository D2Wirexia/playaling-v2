import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { ReactComponent as Close } from '@/icons/close.svg'
import { ReactComponent as MenuDown } from '@/icons/menudown.svg'
import { ReactComponent as MenuUp } from '@/icons/menuup.svg'
import { CheckboxInput, CheckboxLabel } from '~/components/shared/Checkbox/styles'

interface IContainerProps {
  isActive: boolean
}

export const UpIcon = styled(MenuUp)`
  width: 20px;
  height: 20px;
`

export const DownIcon = styled(MenuDown)`
  width: 20px;
  height: 20px;
`

export const CloseIcon = styled(Close)`
  width: 10px;
  height: 10px;
`

export const DropDownContainer = styled.div<IContainerProps>`
  width: 170px;
  height: 46px;

  .react-dropdown-select {
    border: 1px solid ${Color.LightPeriwinkle};
    border-radius: 7px;
    padding: 0 10px;

    &:hover {
      border-color: #eb7d5a;
    }

    &:focus {
      outline: none;
      box-shadow: none;
      border-color: #eb7d5a;
    }

    .react-dropdown-select-content {
      span {
        font-size: 16px;
        line-height: 22px;
        color: ${Color.Quartz};
      }

      ${({ isActive }) =>
        isActive &&
        css`
          span {
            font-size: 16px;
            line-height: 22px;
            color: #eb7d5a;
          }
        `}
    }

    .react-dropdown-select-dropdown {
      width: 300px;
      padding: 10px;
      border: 1px solid ${Color.LightPeriwinkle};
      border-radius: 7px;
      box-shadow: none;

      &:focus {
        .react-dropdown-select {
          box-shadow: none;
          outline: none;
        }
      }

      div {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        ${CheckboxLabel}:hover {
          color: #eb7d5a;
        }

        ${CheckboxInput}:checked {
          & + ${CheckboxLabel} {
            color: #eb7d5a;
          }
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

      svg {
        position: absolute;
        top: 4px;
        left: 2px;
      }

      ${DownIcon} path {
        fill: ${Color.Quartz};
      }

      ${UpIcon} path {
        fill: #eb7d5a;
      }

      ${({ isActive }) =>
        isActive &&
        css`
          svg path {
            fill: #eb7d5a;
          }
        `}
    }
  }
`
