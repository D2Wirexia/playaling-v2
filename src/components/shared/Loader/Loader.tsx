import React from 'react'
import LoaderSimple from './LoaderSimple'
import LoaderNormal from './LoaderNormal'

export interface ILoaderProps {
  size: number
}

const Loader: React.FC<ILoaderProps & { view: 'simple' | 'normal' }> = ({ view, ...props }) => {
  switch (view) {
    case 'simple':
      return <LoaderSimple {...props} />
    case 'normal':
      return <LoaderNormal {...props} />
  }
}

export default Object.assign(Loader, {
  Simple: LoaderSimple,
  Normal: LoaderNormal,
})
