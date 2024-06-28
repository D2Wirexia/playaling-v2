import styled, { keyframes } from 'styled-components'
import { IShimmer } from './Shimmer'

const shimmer = keyframes`
  to { 
    background-position-x: 0;
  }
`

export const Container = styled.div<IShimmer>`
  display: inline-block;
  position: relative;
  height: 280px;
  width: 200px;
  border-radius: 7px;

  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1s infinite linear;
`
