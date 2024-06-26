import React from 'react'
import { Container } from './styles'

export interface IShimmer {
  ws: number // Width size
  hs: number // Height size
  br: number // Border radius
}

const Shimmer: React.FC<IShimmer> = (props) => {
  return <Container {...props} />
}

export default React.memo(Shimmer)
