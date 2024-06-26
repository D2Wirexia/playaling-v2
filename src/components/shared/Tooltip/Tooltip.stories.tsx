import React from 'react'
import type { Meta } from '@storybook/react'

import Tooltip, { TooltipStyle } from './Tooltip'
import { Button } from '~/components/shared'
import { StyleShape } from '~/constants'

const meta: Meta<typeof Tooltip> = {
  title: 'Example/Tooltip',
  component: Tooltip,
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

export const Black = () => {
  return (
    <Tooltip
      elem={<Button.Primary label="target" shape={StyleShape.fit} />}
      variant={TooltipStyle.Black}
    >
      Tooltip Content!
    </Tooltip>
  )
}

export const White = () => {
  return (
    <Tooltip
      elem={<Button.Primary label="target" shape={StyleShape.expanded} />}
      variant={TooltipStyle.White}
      openOnClick
      clickable
    >
      Tooltip Content!
    </Tooltip>
  )
}
