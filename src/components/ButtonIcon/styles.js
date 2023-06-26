import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.light_100};

  &:disabled {
    opacity: 0.5;
  }
`;