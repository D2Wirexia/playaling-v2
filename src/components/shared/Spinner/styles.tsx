import styled, { keyframes } from 'styled-components'

const bounced = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
      transform: scale(1.0);
    }
`

export const Bounce = styled.div`
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  -webkit-animation: ${bounced} 1.4s infinite ease-in-out both;
  animation: ${bounced} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
