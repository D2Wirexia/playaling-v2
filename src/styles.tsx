import { createGlobalStyle } from 'styled-components'
import { Color } from '~/constants'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-arabic: "Adobe Arabic";
    --font-english: "Hind Madurai";
    --transition: all 0.3s;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-english), sans-serif;
  }
  
  body {
    font-family: var(--font-english), sans-serif;
    background: ${Color.Cultured};
  }
  
  button {
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  @font-face {
    font-family: Alegreya;
    src: local("Alegreya"), asset-url('fonts/Alegreya.ttf') format("truetype");
  }

  @font-face {
    font-family: OpenSans;
    src: local("OpenSans"), asset-url('fonts/OpenSans.ttf') format("truetype");
  }

  @font-face {
    font-family: 'Adobe Arabic';
    src: url('../assets/fonts/Adobe Arabic/AdobeArabic-Regular.otf');
  }

  @font-face {
    font-family: 'Adobe Arabic';
    font-weight: bold;
    src: url('../assets/fonts/Adobe Arabic/AdobeArabic-Bold.otf');
  }

  @font-face {
    font-family: 'Adobe Arabic';
    font-style: italic;
    src: url('../assets/fonts/Adobe Arabic/AdobeArabic-Italic.otf');
  }

  @font-face {
    font-family: 'Adobe Arabic';
    font-style: italic;
    font-weight: bold;
    src: url('../assets/fonts/Adobe Arabic/AdobeArabic-BoldItalic.otf');
  }
`
