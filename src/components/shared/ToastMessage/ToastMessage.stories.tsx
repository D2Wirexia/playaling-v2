import React, { useCallback } from 'react'
import type { Meta } from '@storybook/react'
import { actions, useAppDispatch } from '~/store'
import { Button } from '~/components/shared'
import { StyleShape } from '~/constants'
import ToastMessage from './ToastMessage'

const meta: Meta<typeof ToastMessage> = {
  title: 'Example/Toast Message',
  component: ToastMessage,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta

export const View = () => {
  const dispatch = useAppDispatch()

  const pushMessage = useCallback(
    (type: 'default' | 'success') => {
      dispatch(
        actions.ui.addToastMessage({
          message: `Test ${type} message!`,
          type,
        }),
      )
    },
    [dispatch],
  )

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Button.Secondary
        onClick={() => pushMessage('default')}
        label="Push default message"
        shape={StyleShape.fit}
      />
      <Button.Primary
        onClick={() => pushMessage('success')}
        label="Push success message"
        shape={StyleShape.fit}
      />
      <ToastMessage />
    </div>
  )
}
