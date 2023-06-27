import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;

    > .desktop {
      display: none;
      visibility: hidden;
    }

    @media (min-width: 768px) {
      > .mobile {
        display: none;
        visibility: hidden;
      }

      > .desktop {
        display: flex;
        visibility: visible;
      }
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_300};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`;