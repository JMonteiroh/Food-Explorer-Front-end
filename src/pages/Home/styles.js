import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  justify-items: center;
  align-content: space-between;

  grid-template-areas: 
    'header'
    'content'
    'footer';  
 
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  padding: 0 2.4rem;
  gap: 2.4rem;
  


  .banner {
    width: 100;
    height: 12rem;
    
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    gap: 2.4rem;
    margin: 4.4rem 0;

    border-radius: .3rem;
    flex-shrink: 0;
    

    background: ${({ theme }) => theme.colors.gradient_200};

    > img {
      position: absolute;
      bottom: 0;
      left: -3.1rem;
      display:flex ;
      width: 19.1rem;
      height: 14.9rem;
      flex-shrink: 0;

      opacity: 0.9;
    }

    > div {
      display: flex;
      flex-direction: column;
      padding-right: 2rem;
      gap: 1rem;

      color: ${({ theme }) => theme.colors.light_300};
      font-family: 'Poppins', sans-serif;
      line-height: 1.5rem;
      
      > h2 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      > p { 
        font-size: 1.2rem;
      }
    }
  }

`;
