import React, { ReactNode } from 'react'
import {
  CheckmarkSquareIcon,
  EarIcon,
  ModeBarBtn,
  ModeBarContainer,
  PlayFrameIcon,
  QuestionCircleIcon,
} from './styles'
import { Tooltip, TooltipStyle } from '~/components/shared'

interface IIcon {
  elem: ReactNode
  mode: string
  text: string
}

interface IProps {
  activeMode: string
  onSwitch: (mode: string) => void
}

const icons: IIcon[] = [
  {
    elem: <PlayFrameIcon />,
    mode: 'play',
    text: 'Watch the video using captions and the pop-up dictionary',
  },
  {
    elem: <EarIcon />,
    mode: 'ear',
    text: 'Write what you hear to train your ear',
  },
  {
    elem: <QuestionCircleIcon />,
    mode: 'question',
    text: 'The comprehension exercise is not available for this video',
  },
  {
    elem: <CheckmarkSquareIcon />,
    mode: 'checkmark',
    text: 'Default',
  },
]

const ModeBar: React.FC<IProps> = ({ activeMode, onSwitch }) => {
  return (
    <ModeBarContainer>
      {icons.map(({ elem, mode, text }) => (
        <>
          <ModeBarBtn
            key={mode}
            data-tooltip-id={mode}
            onClick={() => onSwitch(mode)}
            isActive={activeMode === mode}
          >
            {elem}
          </ModeBarBtn>
          <Tooltip tooltipId={mode} variant={TooltipStyle.Black}>
            {text}
          </Tooltip>
        </>
      ))}
    </ModeBarContainer>
  )
}

export default React.memo(ModeBar)
