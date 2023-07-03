import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: center;
  grid-template-areas:
   "header"
   "content"
   "footer"
  ;
`;

export const Content = styled.div`
  grid-area: content;
  width: 100vw;
  height: 100vh;
  
  padding: 19rem 0 0 5.6rem;
`;