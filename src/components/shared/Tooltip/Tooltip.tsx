import React, { ReactNode, useMemo } from 'react'
import { TooltipContainer } from './styles'
import { Color } from '~/constants'
import hexToRgba from 'hex-to-rgba'
import { type PlacesType } from 'react-tooltip'

export enum TooltipStyle {
  Black = 'black',
  White = 'white',
}

interface IProps {
  tooltipId: string
  children: string | ReactNode
  variant: TooltipStyle
  openOnClick?: boolean
  disabled?: boolean
  clickable?: boolean
  noArrow?: boolean
  place?: PlacesType
}

const Tooltip: React.FC<IProps> = ({
  tooltipId,
  children,
  variant,
  openOnClick = false,
  disabled = false,
  clickable = false,
  noArrow = false,
  place = 'bottom',
}) => {
  const arrowColor: string = useMemo(() => {
    switch (variant) {
      case TooltipStyle.Black:
        return hexToRgba(Color.Quartz, 0.9)
      case TooltipStyle.White:
        return Color.White
    }
  }, [variant])

  return (
    <TooltipContainer
      variant={variant}
      id={tooltipId}
      openOnClick={openOnClick}
      hidden={disabled}
      noArrow={noArrow}
      clickable={clickable}
      place={place}
      arrowColor={arrowColor}
    >
      {children}
    </TooltipContainer>
  )
}

export default React.memo(Tooltip)
