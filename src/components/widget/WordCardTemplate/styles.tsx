import styled from 'styled-components'
import { Color, Media } from '~/constants'
import hexToRgba from 'hex-to-rgba'
import { Shimmer } from '~/components/shared'

export const ShimmerContainer = styled(Shimmer)`
  width: 270px;
  height: 200px;
  transition: var(--transition);

  @media (max-width: ${Media.tablet}) {
    width: 168px;
    height: 134px;
  }
`

export const Count = styled.span`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: ${Color.Mandarin};
  transition: var(--transition);

  @media (max-width: ${Media.tablet}) {
    display: none;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: ${Color.Quartz};
  transition: var(--transition);

  @media (max-width: ${Media.tablet}) {
    line-height: 16px;
    font-weight: 500;
  }
`

export const Info = styled.div`
  height: 50px;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);

  @media (max-width: ${Media.tablet}) {
    height: 38px;
    padding: 12px;
  }
`

export const Image = styled.img`
  width: 270px;
  height: 150px;
  object-fit: cover;
  transition: var(--transition);

  @media (max-width: ${Media.tablet}) {
    width: 168px;
    height: 110px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 7px;
  width: 270px;
  height: 200px;
  box-shadow: 0 4px 5px ${hexToRgba(Color.EerieBlack, 0.06)};
  transition: var(--transition);
  overflow: hidden;
  background-color: ${Color.White};

  &:hover {
    box-shadow: 0 5px 14px ${hexToRgba(Color.EerieBlack, 0.17)};
  }

  @media (max-width: ${Media.tablet}) {
    width: 168px;
    height: 148px;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`
