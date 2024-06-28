import styled, { css } from 'styled-components'
import React from 'react'
import { Color, Shape } from '~/constants'

interface IContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  view: 'primary' | 'secondary'
  shape?: Shape
  size?: [w: number, h: number]
  isLoading?: boolean
}

export const TargetContainer = styled.button<IContainerProps>`
  border-radius: 7px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  ${({ view, isLoading }) =>
    view === 'primary' &&
    css`
      background: linear-gradient(180deg, ${Color.RoyalOrange} 0%, ${Color.BurntSienna} 100%);
      color: ${Color.White};
      border: 2px solid transparent;

      &:disabled {
        opacity: 0.5;
      }

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background: linear-gradient(180deg, ${Color.TigerEye} 0%, ${Color.VenetianSienna} 100%);
      }

      ${!!isLoading &&
      css`
        background: ${Color.Unbleached};
        color: ${Color.Chocolate};
        border: 2px solid ${Color.Chocolate};
        pointer-events: none;
      `}
    `}

  ${({ view, isLoading }) =>
    view === 'secondary' &&
    css`
      background: ${Color.Lotion};
      color: ${Color.Mandarin};
      border: 2px solid ${Color.Mandarin};

      &:disabled {
        background: ${Color.AntiFlashWhite};
        border: 2px solid ${Color.LightPeriwinkle};
        color: ${Color.LightPeriwinkle};
      }

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background: ${Color.Unbleached};
        color: ${Color.Chocolate};
        border: 2px solid ${Color.Chocolate};
      }

      ${!!isLoading &&
      css`
        background: ${Color.Unbleached};
        color: ${Color.Chocolate};
        border: 2px solid ${Color.Chocolate};
        pointer-events: none;
      `}
    `}

  ${({ shape, size }) =>
    shape === Shape.fit &&
    css`
      width: ${size ? size[0] ?? 308 : 308}px;
      height: ${size ? size[1] ?? 64 : 64}px;
    `}  
  
  ${({ shape, size }) =>
    shape === Shape.expanded &&
    css`
      min-width: ${size ? size[0] ?? 308 : 308}px;
      width: 100%;
      height: ${size ? size[1] ?? 64 : 64}px;
    `}
`
