import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 20,
    },
  },
  args: {},
}

export default meta
type StorySimple = StoryObj<typeof Loader>

export const Simple: StorySimple = {
  args: {
    view: 'simple',
  },
}
