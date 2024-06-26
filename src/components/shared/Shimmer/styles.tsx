import styled, { css, keyframes } from 'styled-components'
import { IShimmer } from './Shimmer'

const shimmer = keyframes`
  to { 
    background-position-x: 0;
  }
`

export const Container = styled.div<IShimmer>`
  display: inline-block;
  position: relative;

  ${({ ws, hs, br }) => css`
    height: ${hs}px;
    width: ${ws}px;
    border-radius: ${br}px;
  `}

  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1s infinite linear;
`
