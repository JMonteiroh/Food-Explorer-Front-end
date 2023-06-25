import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  position: relative;
  gap: .8rem;

  > svg {
    color: ${({ theme }) => theme.colors.cake_100};
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 3.7rem;
  }

`;