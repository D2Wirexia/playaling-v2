import styled, { css } from 'styled-components'
import { Color, Media } from '~/constants'
import hexToRgba from 'hex-to-rgba'

interface IButtonProps {
  isActive: boolean
}

export const TabBarButton = styled.button<IButtonProps>`
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
  width: 230px;
  cursor: pointer;
  border-radius: 7px;
  background-color: transparent;
  color: ${Color.CoolGray};
  overflow-y: hidden;

  @media (max-width: ${Media.tablet}) {
    width: 205px;
    color: ${Color.Quartz};
    line-height: 16px;
    font-weight: 500;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${Color.White};
          color: ${Color.Quartz};

          @media (max-width: ${Media.tablet}) {
            background-color: ${Color.Quartz};
            color: ${Color.White};
          }
        `
      : css`
          &:hover,
          &:focus {
            background-color: ${Color.Gainsboro};

            @media (max-width: ${Media.tablet}) {
              background-color: ${hexToRgba(Color.Quartz, 0.2)};
            }
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

  @media (max-width: ${Media.tablet}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    border-radius: 0;
    background-color: transparent;
    padding: 4px 20px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
