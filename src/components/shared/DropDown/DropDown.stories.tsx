import React from 'react'
import type { Meta } from '@storybook/react'

import DropDown from './DropDown'

const meta: Meta<typeof DropDown> = {
  title: 'Example/DropDown',
  component: DropDown,
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

const options = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' },
]

export const View = () => {
  return <DropDown options={options} />
}
