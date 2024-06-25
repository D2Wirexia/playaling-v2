import React from 'react'
import { LoaderContainer, LoaderIcon } from './styles'
import { ILoaderProps } from './Loader'

const LoaderSimple: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <LoaderContainer size={size}>
      <LoaderIcon />
    </LoaderContainer>
  )
}

export default React.memo(LoaderSimple)
