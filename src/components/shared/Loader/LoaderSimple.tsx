import React from 'react'
import { Dot, DotsContainer } from './styles'
import { ILoaderProps } from './Loader'

const LoaderSimple: React.FC<ILoaderProps> = ({ size }) => {
  const dots = Array.from({ length: 12 }, (_, index) => (
    <Dot key={index} index={index} size={size} />
  ))

  return <DotsContainer size={size}>{dots}</DotsContainer>
}

export default React.memo(LoaderSimple)
