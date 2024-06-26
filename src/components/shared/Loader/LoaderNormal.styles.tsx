import styled, { keyframes } from 'styled-components'
import { ILoaderProps } from '~/components/shared/Loader/Loader'
import { Color } from '~/constants'

const spin = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const BarContainer = styled.div<ILoaderProps>`
  position: relative;
  color: ${Color.Quartz};
  display: flex;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

export const Bar = styled.span<ILoaderProps & { index: number }>`
  animation: ${spin} 1.2s linear infinite;
  transform-origin: 50% 50%;
  animation-delay: ${({ index }) => `${index * 0.1}s`};
  transform: rotate(${({ index }) => index * 30}deg);

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: ${({ size }) => size / 10}px;
    height: ${({ size }) => size / 4}px;
    border-radius: 50%;
    background: ${Color.Quartz};
  }
`
