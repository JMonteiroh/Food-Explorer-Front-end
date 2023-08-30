import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.colors.light_600};
  color: ${({ theme }) => theme.colors.light_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.light_500}` : "none"};

  border-radius: .8rem;

  .button-delete {
    color: ${({ theme }) => theme.colors.light_100};
    
  }
  .button-add {
    color: ${({ theme }) => theme.colors.light_500};

  }

  > button {
    border: none;
    background: none;

    font-size: 2.5rem;
    padding: 0 1rem; 
  }

  > input {
    width: 100%;
    padding: 1rem 1.6rem;

    color: ${({ theme }) => theme.colors.light_500};
    background: transparent;

    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }

  }

`;

