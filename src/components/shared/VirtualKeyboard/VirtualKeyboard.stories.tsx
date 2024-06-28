import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import VirtualKeyboard from './VirtualKeyboard'

const meta: Meta<typeof VirtualKeyboard> = {
  title: 'Shared/Virtual Keyboard',
  component: VirtualKeyboard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    handleSubmit: fn(),
    onChange: fn(),
  },
}

export default meta
type StoryVirtualKeyboard = StoryObj<typeof VirtualKeyboard>

export const View: StoryVirtualKeyboard = {
  args: {},
}
