import React, { useRef } from 'react'
import { useClickOutside } from '~/hooks'

interface IProps {
  children: React.ReactElement
  onClick: () => void
}

const OutsideClicker: React.FC<IProps> = ({ children, onClick }) => {
  const ref: React.RefObject<HTMLElement> = useRef(null)
  useClickOutside(ref, onClick)

  return React.cloneElement(children, { ref })
}

export default React.memo(OutsideClicker)
