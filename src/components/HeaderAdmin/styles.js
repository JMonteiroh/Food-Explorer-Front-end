import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 14.4rem;
  z-index: 999;
  position: fixed;
  top: 0;


  background-color: ${({ theme }) => theme.colors.dark_700};

  display: flex;
  grid-area: header;
  
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6rem 0 2.9rem;

  
  > .desktop {
    display: none;
    visibility: hidden;
  }

  @media (min-width: 768px) {

    padding: 0;


    > .mobile {
      display: none;
      visibility: hidden;
    }

    > .desktop {
      display: flex;
      visibility: visible;
    }
  }
`;

export const Mobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.6rem;
  grid-area: header;

  > .btn-navbar {
    color: ${({ theme }) => theme.colors.light_100};
  }

  > .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.4rem;
    }
  }

  > .receipt {
    display: flex;
    position: relative;
    > .counter {
      position: absolute;
      right: -.8rem;
      top: -.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;

      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.tomato_100};
      z-index: 999;

      > span {
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      }

    }

    .btn-receipt {
      color: ${({ theme }) => theme.colors.light_100};
    }
  }
`;

export const Desktop = styled.div`
  @media (min-width:768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    padding: 2.4rem 3.6rem;

    .logo-desk {
      flex: 1 0 0 ;
    }
    
    .input {
      flex: 1 0 0;
      h3 {
        visibility: hidden;
        display: none;
      }
    }

    .new-plate {
      max-width: 21.6rem;
      max-height: 4.3rem;
    }

    .btn-signout {
      color: ${({ theme }) => theme.colors.light_100};
    }
    
  }
`;