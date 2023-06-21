import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.colors.dark_700};

  display: grid;
  grid-area: header;
  
  padding: 6rem 0 2.8rem 0;

  @media (min-width: 768px) {

  }
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .receipt {
    position: relative;
    display: flex;
    align-items: center;

    button{
      position: relative;

    }

    span {
      position: absolute;
      top: -0.8rem;
      right: -0.8rem;
      z-index: 999;
      
      background-color: ${({ theme }) => theme.colors.tomato_100};
      
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }


  .desktop {
    position: absolute;
    visibility: hidden;
  }

  @media (min-width: 768px) {
    .mobile {
      position: absolute;
      visibility: hidden;
    }

    .desktop {
      visibility: visible;
      position: static;
    }

    gap: 3.2rem;

    .logo {
   
    }

    .order {
      max-width: 21.6rem;
      display: flex;
      
    }


  }
`;
