import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.4rem 0;
  background-color: ${({ theme }) => theme.colors.dark_600};
  grid-area: footer;
  position: fixed;
  bottom: 0;
  z-index: 999;

  > .logo {
    > svg {
      width: 2.2rem;
      height: 1.8rem;
      color: ${({ theme }) => theme.colors.light_700};

    }

    > h1 {
      color: ${({ theme }) => theme.colors.light_700};
      font-size: 1.5rem;   
    }    
  }

  > P {
    color: ${({ theme }) => theme.colors.light_200};
    text-align: right;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;

  }


`;

