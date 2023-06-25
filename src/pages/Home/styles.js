import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  justify-items: center;
  grid-template-areas: 
    'header'
    'content'
    'footer';  
 
`;
export const Content = styled.div`
  grid-area: content;
  width: 100%

  .banner {

    background: ${({ theme }) => theme.colors.gradient_200}
  }

`;
