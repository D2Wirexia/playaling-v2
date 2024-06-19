import React from 'react'
import { Container, Bounce } from './styles'

const Spinner: React.FC = () => {
  return (
    <Container>
      <Bounce />
      <Bounce />
      <Bounce />
    </Container>
  )
}

export default React.memo(Spinner)
