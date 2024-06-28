import React from 'react'
import { GlobalStyles } from '~/styles'
import type { Preview } from '@storybook/react'
import type { PartialStoryFn, StoryContext } from '@storybook/types'
import { Provider } from 'react-redux'
import { store } from '~/store'
import { BrowserRouter } from 'react-router-dom'

const withProviders = (Story: PartialStoryFn<any, any>, context: StoryContext) => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <Story {...context} />
    </Provider>
  </BrowserRouter>
)

export const parameters = {
  backgrounds: {
    default: 'background',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#222222' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withProviders]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
