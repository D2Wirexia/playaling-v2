import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MessageContainer } from './styles'
import { useAppDispatch, useAppSelector, actions } from '~/store'
import { Transition, type TransitionStatus } from 'react-transition-group'
import { CSSProperties } from 'styled-components'
import { Color } from '~/constants'

const initialStyle: CSSProperties = {
  transition: `all 600ms ease-in-out`,
  opacity: 0,
  bottom: '-10px',
  transform: 'translate(-50%, 0)',
}

const transitionStyles: { [key in string]: CSSProperties } = {
  entering: { opacity: 1, transform: 'translate(-50%, -32px)' },
  entered: { opacity: 1, transform: 'translate(-50%, -32px)' },
  exiting: { opacity: 0, transform: 'translate(-50%, -10px)' },
  exited: { opacity: 0, transform: 'translate(-50%, -10px)' },
}

export interface IToastMessage {
  message: string
  type?: 'default' | 'success'
}

const ToastMessage: React.FC = () => {
  const [current, setCurrent] = useState<IToastMessage | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const timer = useRef<NodeJS.Timeout>()

  const { toastMessages } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  const timeDuration: number = useMemo((): number => {
    return Math.max(toastMessages[0]?.message.length * 60 ?? 0, 2000)
  }, [toastMessages])

  const handlerHide = useCallback(
    (toastMessage: IToastMessage): void => {
      setCurrent(toastMessage)
      setMessage(toastMessage.message)
      timer.current = setTimeout(() => {
        dispatch(actions.ui.removeToastMessage(toastMessage.message))
        setCurrent(null)
        clearTimeout(timer.current)
      }, timeDuration)
    },
    [dispatch, timeDuration],
  )

  useEffect(() => {
    const firstMessage: IToastMessage = toastMessages[0]
    if (!firstMessage) return
    if (!current) {
      handlerHide(firstMessage)
    } else {
      if (current.message === firstMessage.message) return
      setTimeout(() => {
        handlerHide(firstMessage)
      }, timeDuration)
    }
  }, [toastMessages, timeDuration])

  const getBackgroundMessage: Color = useMemo(() => {
    if (!current) return Color.Quartz
    if (current.type === 'success') return Color.GreenSheen
    return Color.Quartz
  }, [current])

  return (
    <Transition in={!!current} timeout={400} onExited={() => setMessage(null)} unmountOnExit>
      {(state: TransitionStatus) => (
        <MessageContainer
          style={{
            ...initialStyle,
            ...transitionStyles[state],
            background: getBackgroundMessage,
          }}
        >
          {message}
        </MessageContainer>
      )}
    </Transition>
  )
}

export default React.memo(ToastMessage)
