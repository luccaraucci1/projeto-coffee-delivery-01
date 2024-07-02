import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, p{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-weight: 400;
  }

  h1, h2{
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }

  button {
    border: none;
    cursor: pointer;
  }
`
