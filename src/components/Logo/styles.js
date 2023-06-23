import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  position: relative;
  gap: .8rem;

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 3.7rem;
    line-height: 4.4rem;
  }

  .polygon {
    width: 2.6rem;
    height: 3.1rem;
    background-color: #065E7C;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;