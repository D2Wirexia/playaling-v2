import styled from 'styled-components'
import { Color } from '~/constants'
import hexToRgba from 'hex-to-rgba'
import ReactModal from 'react-modal'

export const Content = styled.div``

export const Overlay = styled.div`
  background-color: ${hexToRgba(Color.EerieBlack, 0.3)} !important;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledReactModal = styled(ReactModal)``
