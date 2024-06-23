import React from 'react'
import { Routes, useLocation } from 'react-router-dom'

const RouteApp: React.FC = () => {
  const location = useLocation()

  return (
    <Routes key={location.pathname} location={location}>
      {/* routes */}
    </Routes>
  )
}

export default React.memo(RouteApp)
