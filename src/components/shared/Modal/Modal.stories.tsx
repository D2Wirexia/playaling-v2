import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import Modal from './Modal'
import { Button } from '~/components/shared'
import { Shape } from '~/constants'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpen = () => setIsModalOpen(true)
  const onClose = () => setIsModalOpen(false)

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <Button.Primary label="Button" shape={Shape.expanded}></Button.Primary>
      </Modal>
      <button onClick={onOpen}>Test Open</button>
    </>
  )
}
