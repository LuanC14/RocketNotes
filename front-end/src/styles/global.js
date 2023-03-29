import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);

    }

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
    background-color: none;
}

*::-webkit-scrollbar-thumb {
  background:  ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px;
  border: 3px solid transparent;
}

`

export default GlobalStyle
