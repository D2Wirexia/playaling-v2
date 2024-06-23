import styled, { css } from 'styled-components'
import { Color } from '~/constants'

interface IButtonProps {
  isActive: boolean
}

export const TabBarButton = styled.button<IButtonProps>`
  border: none;
  outline: none;
  padding: 10px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  height: 36px;
  min-width: 230px;
  max-width: 230px;
  cursor: pointer;
  border-radius: 7px;
  background-color: transparent;
  color: ${Color.CoolGray};
  overflow-y: hidden;

  @media (max-width: 728px) {
    min-width: 205px;
    max-width: 205px;
    color: ${Color.Quartz};
    line-height: 16px;
    font-weight: 500;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${Color.White};
          color: ${Color.Quartz};

          @media (max-width: 728px) {
            background-color: ${Color.Quartz};
            color: ${Color.White};
          }
        `
      : css`
          &:hover,
          &:focus {
            background-color: red;
          }
        `}
`

export const TabBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  background-color: ${Color.AzureWhite};
  border-radius: 7px;
  padding: 4px;
  gap: 4px;

  @media (max-width: 728px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    width: auto;
    background-color: ${Color.AntiFlashWhite};

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`
