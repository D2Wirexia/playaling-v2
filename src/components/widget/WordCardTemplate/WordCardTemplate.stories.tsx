import React from 'react'
import type { Meta } from '@storybook/react'

import WordCardTemplate from './WordCardTemplate'
import testimonials from '@/testimonials.png'

const meta: Meta<typeof WordCardTemplate> = {
  title: 'Widgets/Word Card Template',
  component: WordCardTemplate,
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

const card = {
  image: testimonials,
  title: 'Food',
  count: 78,
  slug: 'slug',
}

export const View = () => {
  return <WordCardTemplate card={card} template="template" />
}

export const Shimmer = () => {
  return <WordCardTemplate.Shimmer />
}
