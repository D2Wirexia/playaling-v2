import React from 'react'
import { GlobalStyles } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '~/store'
import RouteApp from '~/RouteApp'
import { ToastMessage } from '~/components/shared'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store} key="provider">
        <GlobalStyles />
        <RouteApp />
        <ToastMessage />
      </Provider>
    </BrowserRouter>
  )
}

export default React.memo(App)
