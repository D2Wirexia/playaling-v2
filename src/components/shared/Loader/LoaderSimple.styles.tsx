import styled, { css, keyframes } from 'styled-components'
import { Color } from '~/constants'
import { ILoaderProps } from './Loader'
import hexToRgba from 'hex-to-rgba'

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderItem = styled.div<ILoaderProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border-top: ${size * 0.15}px solid ${Color.Mandarin};
      border-right: ${size * 0.15}px solid ${hexToRgba(Color.Mandarin, 0.4)};
      border-bottom: ${size * 0.15}px solid ${hexToRgba(Color.Mandarin, 0.4)};
      border-left: ${size * 0.15}px solid ${hexToRgba(Color.Mandarin, 0.4)};
      animation: ${SpinnerAnimation} 1.2s linear infinite;
    `}
`

export const LoaderContainer = styled.div<ILoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`
