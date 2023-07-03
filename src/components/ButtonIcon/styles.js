import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.light_100};

  &:disabled {
    opacity: 0.5;
  }

  > span {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;