import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  justify-items: center;
  align-content: space-between;

  grid-template-areas: 
    'header'
    'content'
    'footer';  
 
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 17rem;
  grid-area: content;

  .banner {
    width: 85vw;
    height: 13rem;
    
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

    > .letters {
      width: 21rem;
      display: flex;
      flex-direction: column;
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
        font-weight: 400;
        overflow-wrap: break-word;
      }
    }
  }

  @media (min-width: 768px) {
    .banner {
      background: transparent;
      width: 85vw;
      height: 26rem;
      margin: 0;

      > img {
        bottom: -5rem;
        left: -23rem;
        width: 73rem;
        height: 30rem;
        flex-shrink: 0;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 85%);

      }
      .letters {
        width: 44rem;
        padding-right: 0rem;
        
        > h2 {
          font-size: 4rem;
          font-weight: 500;
        }

        > p {
          font-size: 1.4rem;
        }
      }
    }
  }

`;
