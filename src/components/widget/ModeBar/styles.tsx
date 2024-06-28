import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { ReactComponent as PlayFrame } from '@/icons/play-frame.svg'
import { ReactComponent as Ear } from '@/icons/ear.svg'
import { ReactComponent as QuestionCircle } from '@/icons/question-circle.svg'
import { ReactComponent as CheckmarkSquare } from '@/icons/checkmark-square.svg'

interface IBtnProps {
  isActive: boolean
}

export const CheckmarkSquareIcon = styled(CheckmarkSquare)``
export const QuestionCircleIcon = styled(QuestionCircle)``
export const EarIcon = styled(Ear)``
export const PlayFrameIcon = styled(PlayFrame)``

export const ModeBarBtn = styled.button<IBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${Color.Quartz};
  border-radius: 7px;
  margin-top: 32px;

  &:first-child {
    margin-top: 0;
  }

  ${PlayFrameIcon}, ${QuestionCircleIcon}, ${CheckmarkSquareIcon} {
    path {
      fill: ${Color.LightPeriwinkle};
    }
  }

  ${EarIcon} path {
    stroke: ${Color.LightPeriwinkle};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(${Color.RoyalOrange}, ${Color.BurntSienna});

      ${PlayFrameIcon}, ${QuestionCircleIcon}, ${CheckmarkSquareIcon} {
        path {
          fill: ${Color.White};
        }
      }

      ${EarIcon} path {
        stroke: ${Color.White};
      }
    `}
`

export const ModeBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`
