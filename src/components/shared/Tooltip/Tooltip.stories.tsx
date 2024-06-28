import React, { useId } from 'react'
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
  argTypes: {
    openOnClick: {
      control: 'boolean',
      defaultValue: false,
    },
    clickable: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    noArrow: {
      control: 'boolean',
      defaultValue: false,
    },
    place: {
      control: 'radio',
      defaultValue: 'bottom',
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
  args: {},
}

export default meta

export const Black = () => {
  const id: string = useId()
  return (
    <>
      <Button.Primary data-tooltip-id={id} label="Hovering target" shape={StyleShape.fit} />
      <Tooltip tooltipId={id} variant={TooltipStyle.Black}>
        Tooltip Content!
      </Tooltip>
    </>
  )
}

export const White = () => {
  const id: string = useId()

  return (
    <>
      <Button.Secondary data-tooltip-id={id} label="Clickable target" shape={StyleShape.expanded} />
      <Tooltip tooltipId={id} variant={TooltipStyle.White} openOnClick clickable>
        Tooltip Content!
      </Tooltip>
    </>
  )
}

export const Multi = () => {
  const hoverId: string = useId()
  const clickId: string = useId()

  return (
    <>
      <Button.Primary
        data-tooltip-id={hoverId}
        label="Hovering target"
        shape={StyleShape.expanded}
      />
      <Tooltip tooltipId={hoverId} variant={TooltipStyle.White} clickable>
        <Button.Secondary
          data-tooltip-id={clickId}
          label="Clickable target"
          shape={StyleShape.fit}
        />
        <Tooltip tooltipId={clickId} variant={TooltipStyle.Black} openOnClick clickable>
          Tooltip Content!
        </Tooltip>
      </Tooltip>
    </>
  )
}
