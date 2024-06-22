import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  to { 
    background-position-x: 0;
  }
`

export const Container = styled.div`
  height: 200px;
  width: 270px;
  border-radius: 7px;
  display: inline-block;
  position: relative;

  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1s infinite linear;
`
