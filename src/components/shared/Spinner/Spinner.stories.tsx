import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Shared/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta
type StorySpinner = StoryObj<typeof Spinner>

export const View: StorySpinner = {
  args: {},
}
