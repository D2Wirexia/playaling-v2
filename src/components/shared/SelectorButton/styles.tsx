import styled, { css } from 'styled-components'
import { Color } from '~/constants'

interface ILabelProps {
  isActive: boolean
  isFocus: boolean
}

export const SelectorButtonRadio = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`

export const SelectorButtonLabel = styled.label<ILabelProps>`
  padding: 6px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  border: 1px solid ${Color.Mandarin};
  border-radius: 7px;
  color: ${Color.Quartz};
  background-color: ${Color.White};

  ${({ isFocus }) =>
    isFocus &&
    css`
      outline: 2px solid ${Color.Quartz};
    `}

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${Color.Mandarin};
          color: ${Color.White};
        `
      : css`
          &:hover {
            background-color: ${Color.Unbleached};
          }
        `}
`

export const SelectorButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 12px;
`
