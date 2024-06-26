import styled, { css, keyframes } from 'styled-components'
import { ILoaderProps } from '~/components/shared/Loader/Loader'
import { Color } from '~/constants'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const dotAnimation = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
`

export const DotsContainer = styled.div<ILoaderProps>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${rotate} 5s linear infinite;
`

export const Dot = styled.span<ILoaderProps & { index: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${Color.Mandarin};
  border-radius: 50%;
  animation: ${dotAnimation} 1.2s linear infinite;
  animation-delay: ${({ index }) => `${index * 0.1}s`};

  ${({ size, index }) => {
    const radius = size / 2 - 5
    const angle = (index / 12) * 360
    const radians = (angle * Math.PI) / 180

    const top = Math.sin(radians) * radius
    const left = Math.cos(radians) * radius

    return css`
      width: ${size * 0.125}px;
      height: ${size * 0.125}px;
      top: calc(50% - ${size * 0.0625}px + ${top}px);
      left: calc(50% - ${size * 0.0625}px + ${left}px);
    `
  }}
`
