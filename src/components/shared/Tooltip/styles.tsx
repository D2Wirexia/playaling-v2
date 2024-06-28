import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import hexToRgba from 'hex-to-rgba'
import { TooltipStyle } from './Tooltip'

interface ITooltipProps {
  variant: TooltipStyle
}

export const TooltipContainer = styled(ReactTooltip)<ITooltipProps>`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 22px;
  border-radius: 7px;
  box-shadow: 0 5px 14px ${hexToRgba(Color.EerieBlack, 0.17)};

  ${({ variant }) =>
    variant === TooltipStyle.Black &&
    css`
      background-color: ${hexToRgba(Color.Quartz, 0.9)};
      color: ${Color.White};
    `}

  ${({ variant }) =>
    variant === TooltipStyle.White &&
    css`
      background-color: ${Color.White};
      color: ${Color.EerieBlack};
    `}
`
