import styled, { css } from 'styled-components'
import { Color } from '~/constants'
import { ReactComponent as CheckmarkIcon } from '@/icons/checkmark.svg'

interface IStepProps {
  isActive: boolean
  isCompleted: boolean
}

export const Checkmark = styled(CheckmarkIcon)`
  width: 29px;
  height: 21px;
  transition: var(--transition);

  @media (max-width: 768px) {
    width: 21px;
    height: 13px;
  }
`

export const Step = styled.div<IStepProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 3px solid ${Color.Mandarin};
  border-radius: 50%;
  color: ${Color.Mandarin};
  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  margin-right: 40px;
  position: relative;
  transition: var(--transition);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-width: 2px;
    font-size: 26px;
    line-height: 26px;
    font-weight: 500;
    margin-right: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 41px;
    height: 2px;
    background-color: ${Color.Mandarin};
    left: 57px;
    transition: var(--transition);

    @media (max-width: 768px) {
      width: 21px;
      height: 1px;
      left: 38px;
    }
  }

  &:last-child {
    margin-right: 0;

    &::after {
      width: 0;
      height: 0;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${Color.White};
      background-color: ${Color.Mandarin};
    `}

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      border-color: #70b202;
      background-color: #70b202;

      &::after {
        background-color: #70b202;
      }
    `}
`

export const StepsContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`
