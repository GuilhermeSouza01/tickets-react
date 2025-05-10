import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background-color 0.3s, border 0.3s;
  }

  body {
    background-color: ${props => props.theme['background-50']};
    color: ${props => props.theme['color-grey-700']};
    min-height: 100vh;
    transition: color 0.3s, background-color 0.3s;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
  background-color: ${props => props.theme['color-grey-200']};
  color: ${props => props.theme['color-grey-500']};
}

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
  outline: 2px solid ${props => props.theme['color-brand-400']};
  outline-offset: -1px;
  }

  button:has(svg) {
  line-height: 0;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ul {
  list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(${props => props.theme["image-grayscale"]}) opacity(${props => props.theme["image-opacity"]});
}
`;
