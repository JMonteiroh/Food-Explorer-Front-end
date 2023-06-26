import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  overflow-y: auto;
  > h2 {

    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  >div {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
    button {
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

`;