import styled from 'styled-components'
import { ReactComponent as Loader } from '@/icons/loader.svg'
import { ILoaderProps } from '~/components/shared/Loader/Loader'

export const LoaderIcon = styled(Loader)`
  width: 100%;
  height: 100%;
`

export const LoaderContainer = styled.div<ILoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size || 100}px;
  height: ${(props) => props.size || 100}px;
`
