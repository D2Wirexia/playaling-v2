import React, { ReactNode } from 'react'
import { Content, Overlay, StyledReactModal } from './styles'

interface IProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<IProps> = ({ isOpen, onClose, children }) => {
  return (
    <StyledReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayElement={(props, contentEl) => <Overlay {...props}>{contentEl}</Overlay>}
      contentElement={(props, children) => <Content {...props}>{children}</Content>}
      shouldFocusAfterRender={false}
      closeTimeoutMS={300}
    >
      {children}
    </StyledReactModal>
  )
}

export default React.memo(Modal)
