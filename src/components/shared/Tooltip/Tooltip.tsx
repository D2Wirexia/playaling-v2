import React, { ReactNode, useId } from 'react'
import { StyledTooltip, TargetElement, TooltipContainer } from '~/components/shared/Tooltip/styles'

export enum TooltipStyle {
  Black = 'black',
  White = 'white',
}

interface IProps {
  children: string | ReactNode
  elem: string | ReactNode
  variant: TooltipStyle
  openOnClick?: boolean
  disabled?: boolean
  clickable?: boolean
}

const Tooltip: React.FC<IProps> = ({
  children,
  elem,
  variant,
  openOnClick,
  disabled,
  clickable,
}) => {
  const id: string = useId()

  return (
    <TooltipContainer variant={variant}>
      <TargetElement data-tooltip-id={id}>{elem}</TargetElement>
      <StyledTooltip
        id={id}
        openOnClick={openOnClick}
        hidden={disabled}
        noArrow
        clickable={clickable}
        place="bottom"
      >
        {children}
      </StyledTooltip>
    </TooltipContainer>
  )
}

export default React.memo(Tooltip)
