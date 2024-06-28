import React from 'react'
import { Container } from './styles'

const Shimmer: React.FC = (props) => {
  return <Container {...props} />
}

export default React.memo(Shimmer)
