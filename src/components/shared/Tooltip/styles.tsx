import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import hexToRgba from 'hex-to-rgba'

interface ITooltipProps {
  variant: 'black' | 'white'
}

export const StyledTooltip = styled(ReactTooltip)``

export const TargetElement = styled.a`
  display: inline-block;
  height: 100%;
`

export const TooltipContainer = styled.div<ITooltipProps>`
  ${StyledTooltip} {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 22px;
    border-radius: 7px;
    box-shadow: 0 5px 14px ${hexToRgba(Color.EerieBlack, 0.17)};

    ${({ variant }) =>
      variant === 'black'
        ? css`
            background-color: ${hexToRgba(Color.Quartz, 0.9)};
            color: ${Color.White};
          `
        : css`
            background-color: ${Color.White};
            color: ${Color.EerieBlack};
          `}
  }
`
