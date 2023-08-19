import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
  grid-template-areas:
   "header"
   "content"
   "footer"
  ;
`;

export const Content = styled.div`

  grid-area: "content";

`;