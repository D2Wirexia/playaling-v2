import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import SelectorButton from './SelectorButton'

const meta: Meta<typeof SelectorButton> = {
  title: 'Example/SelectorButton',
  component: SelectorButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onChange: fn(),
  },
}

export default meta
type StorySelectorButton = StoryObj<typeof SelectorButton>

export const View: StorySelectorButton = {
  args: {
    values: [
      { key: 0, label: 'Beginner' },
      { key: 1, label: 'Intermediate' },
      { key: 2, label: 'Advanced' },
      { key: 3, label: 'Expert' },
      { key: 4, label: 'Expeddddddddddddddddrt' },
      { key: 5, label: 'Expersdsdsdtasd' },
      { key: 6, label: 'Expssert' },
      { key: 7, label: 'ssss' },
      { key: 8, label: 'Expssss ssssert' },
    ],
    activeValue: 1,
  },
}
