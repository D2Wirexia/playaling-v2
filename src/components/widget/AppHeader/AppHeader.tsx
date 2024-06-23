import React from 'react'
import { Header, LeftFloat, Logo, RightFloat } from './styles'
import { Link } from 'react-router-dom'
import { Route } from '~/constants'

const AppHeader: React.FC = () => {
  return (
    <Header>
      <LeftFloat>
        <Link to={Route.Videos}>
          <Logo />
        </Link>
      </LeftFloat>
      <RightFloat></RightFloat>
    </Header>
  )
}

export default React.memo(AppHeader)
