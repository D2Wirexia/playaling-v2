import React from 'react'
import { Bar, BarContainer } from './LoaderNormal.styles'
import { ILoaderProps } from './Loader'

const LoaderNormal: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <BarContainer size={size}>
      {Array.from({ length: 12 }, (_, index) => (
        <Bar key={index} index={index} size={size} />
      ))}
    </BarContainer>
  )
}

export default React.memo(LoaderNormal)
