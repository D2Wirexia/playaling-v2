import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button from './Button'
import { Shape } from '~/constants'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
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
      defaultValue: Shape.fit,
      options: [Shape.fit, Shape.expanded],
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
    shape: Shape.fit,
    disabled: false,
  },
}

export const Secondary: StorySecondary = {
  args: {
    view: 'secondary',
    label: 'Button',
    isLoading: false,
    shape: Shape.fit,
    disabled: false,
  },
}
