import React, { useCallback } from 'react'
import { Container, Count, Image, Info, ShimmerContainer, Title } from './styles'
import { useNavigate } from 'react-router-dom'
import { replaceParams } from '~/functions'
import { Route } from '~/constants'

interface ICard {
  image: string
  title: string
  count: number
  slug: string
}

interface IProps {
  card: ICard
  template: string
}

const WordCardTemplate: React.FC<IProps> = ({ card, template }) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(
      replaceParams(Route.WordSetTemplate, {
        slug: card.slug,
        template: template,
      }),
    )
  }, [navigate, card.slug, template])

  return (
    <Container onClick={handleClick}>
      <Image src={card.image} />
      <Info>
        <Title>{card.title}</Title>
        <Count>{card.count} words</Count>
      </Info>
    </Container>
  )
}

const WordCardTemplateShimmer: React.FC = () => <ShimmerContainer />

export default Object.assign(WordCardTemplate, {
  Shimmer: WordCardTemplateShimmer,
})
