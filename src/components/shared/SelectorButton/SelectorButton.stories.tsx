import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import SelectorButton from './SelectorButton'

const meta: Meta<typeof SelectorButton> = {
  title: 'Shared/Selector Button',
  component: SelectorButton,
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

export const View = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null)

  return (
    <SelectorButton
      activeValue={activeValue}
      onChange={setActiveValue}
      values={[
        { key: 'beginner', label: 'Beginner' },
        { key: 'intermediate', label: 'Intermediate' },
        { key: 'advanced', label: 'Advanced' },
        { key: 'expert', label: 'Expert' },
        { key: 'divine', label: 'Divine' },
        { key: 'immortal', label: 'Immortal' },
        { key: 'arcane', label: 'Arcane' },
        { key: 'large', label: 'Дуже довга назва для тестування переносу тексту на новий рядок' },
        { key: 'sex', label: 'Sex' },
      ]}
    />
  )
}
