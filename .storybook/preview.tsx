import React from 'react'
import { GlobalStyles } from '~/styles'
import type { Preview } from '@storybook/react'
import type {PartialStoryFn, StoryContext} from "@storybook/types"

const withGlobalStyle = (Story: PartialStoryFn<any, any>, context: StoryContext) => (
  <>
    <GlobalStyles />
    <Story {...context} />
  </>
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
};

export const decorators = [withGlobalStyle]

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
