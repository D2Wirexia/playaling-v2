import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { Color } from '~/constants'
import { ReactComponent as LogoIcon } from '@/logo.svg'

export const Logo = styled(LogoIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftFloat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 46px;
`
export const RightFloat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header = styled.header`
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 7px ${hexToRgba(Color.EerieBlack, 0.1)};
`
