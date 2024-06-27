import React from 'react'
import { LoaderContainer, LoaderItem } from './LoaderSimple.styles'
import { ILoaderProps } from './Loader'

const LoaderSimple: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <LoaderContainer size={size}>
      <LoaderItem size={size} />
    </LoaderContainer>
  )
}

export default React.memo(LoaderSimple)
