import React from 'react'
import { Dot, DotsContainer } from './LoaderSimple.styles'
import { ILoaderProps } from './Loader'

const LoaderSimple: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <DotsContainer size={size}>
      {Array.from({ length: 12 }, (_, index) => (
        <Dot key={index} index={index} size={size} />
      ))}
    </DotsContainer>
  )
}

export default React.memo(LoaderSimple)
