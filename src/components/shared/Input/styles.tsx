import styled from 'styled-components'
import { Color } from '~/constants'
import hexToRgba from 'hex-to-rgba'

interface IInputField {
  isError: boolean
}

export const Error = styled.div`
  color: ${Color.FireOpal};
`
export const Info = styled.div`
  color: ${Color.AppleGreen};
`
export const BottomContainer = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
`
export const RightContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const InputField = styled.input<IInputField>`
  width: 308px;
  height: 42px;
  border-radius: 7px;
  background: ${Color.Cultured};
  padding: 0 15px 0 15px;
  display: flex;
  border: 1px solid ${({ isError }) => (isError ? Color.FireOpal : 'transparent')};
  justify-content: center;
  align-items: center;

  &::placeholder {
    color: ${Color.CoolGray};
    font-size: 16px;
    line-height: 22px;
  }

  &:focus {
    background: transparent;
    border: 1px solid ${Color.Mandarin};
    box-shadow: 0 0 0 2px ${hexToRgba(Color.RoyalOrange, 0.2)};
  }
`

export const InputContainer = styled.div`
  position: relative;
`
export const Hint = styled.div`
  color: ${Color.CoolGray};
  font-size: 12px;
  line-height: 18px;
`
export const Label = styled.div`
  color: ${Color.Quartz};
  font-size: 16px;
  line-height: 22px;
`
export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`
