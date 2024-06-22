import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button from './Button'
import { StyleShape } from '~/constants'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    shape: {
      control: 'radio',
      defaultValue: StyleShape.fit,
      options: [StyleShape.fit, StyleShape.expanded],
    },
    size: {
      control: 'object',
      defaultValue: [308, 64],
      options: [],
    },
  },
  args: { onClick: fn() },
}

export default meta
type StoryPrimary = StoryObj<typeof Button>
type StorySecondary = StoryObj<typeof Button>

export const Primary: StoryPrimary = {
  args: {
    view: 'primary',
    label: 'Button',
    isLoading: false,
    shape: StyleShape.fit,
    disabled: false,
  },
}

export const Secondary: StorySecondary = {
  args: {
    view: 'secondary',
    label: 'Button',
    isLoading: false,
    shape: StyleShape.fit,
    disabled: false,
  },
}
