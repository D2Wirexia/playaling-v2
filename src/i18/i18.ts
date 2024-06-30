import { initReactI18next } from 'react-i18next'

import * as i18n from 'i18next'

export const defaultNS = 'translation'

export const resources = {
  en: {
    translation: {
      ['test']: 'Waiting messenger is loading...',
    },
  },
  ua: {
    translation: {},
  },
}

const currentLanguage = localStorage.getItem('language')

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage ?? 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
