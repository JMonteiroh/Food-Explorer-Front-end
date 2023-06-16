import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  >h3 {
    color: ${({ theme }) => theme.colors.light_500};

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;

    margin-bottom: .8rem;
  }

`;

export const InputBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_500};
  border-radius: .8rem;

  input {
    width: 100%;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.2rem;
  
    padding: 1.2rem 1.4rem;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.light_500};
  
    &:placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }

`;