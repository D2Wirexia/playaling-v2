import React from 'react'
import LoaderSimple from '~/components/shared/Loader/LoaderSimple'

export interface ILoaderProps {
  size: number
}

const Loader: React.FC<ILoaderProps & { view: 'simple' }> = ({ view, size }) => {
  switch (view) {
    case 'simple':
      return <LoaderSimple size={size} />
  }
}

export default Object.assign(Loader, {
  Simple: LoaderSimple,
})
