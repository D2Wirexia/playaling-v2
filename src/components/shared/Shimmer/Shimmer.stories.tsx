import type { Meta, StoryObj } from '@storybook/react'

import Shimmer from './Shimmer'

const meta: Meta<typeof Shimmer> = {
  title: 'Example/Shimmer',
  component: Shimmer,
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
type StoryShimmer = StoryObj<typeof Shimmer>

export const View: StoryShimmer = {
  args: {
    ws: 270,
    hs: 200,
    br: 7,
  },
}
