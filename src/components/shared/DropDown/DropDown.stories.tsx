import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import DropDown from './DropDown'

const meta: Meta<typeof DropDown> = {
  title: 'Shared/Drop Down',
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

export const Multi = () => {
  const [dialects, setDialects] = useState<string[]>(['advanced'])

  return (
    <DropDown
      placeholder="Dialects"
      options={[
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'expert', label: 'Expert' },
      ]}
      activeOptions={dialects}
      onChange={setDialects}
      multi
    />
  )
}

export const Single = () => {
  const [sort, setSort] = useState<string[]>([])

  return (
    <DropDown
      placeholder="Sort"
      options={[
        { value: 'popularity', label: 'Popularity' },
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
      ]}
      activeOptions={sort}
      onChange={setSort}
    />
  )
}
