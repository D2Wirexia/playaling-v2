import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import ModeBar from './ModeBar'

const meta: Meta<typeof ModeBar> = {
  title: 'Shared/ModeBar',
  component: ModeBar,
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
  const [activeMode, setActiveMode] = useState<string>('play')

  const onSwitch = (mode: string) => {
    setActiveMode(mode)
  }

  return <ModeBar activeMode={activeMode} onSwitch={onSwitch} />
}
