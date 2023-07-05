import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#ffffff',
  vermelha: '#E66767',
  cinza: '#333',
  verde: '#10Ac84',
  cinzaClaro: '#A3A3A3',
  rosaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.branca};
    color: ${Cores.vermelha};

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
