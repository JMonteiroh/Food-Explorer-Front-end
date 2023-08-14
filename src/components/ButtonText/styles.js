import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  color: ${({ theme, isRed }) => (isRed ? theme.colors.tomato_300 : theme.colors.light_100)};

  background: none;
  border: none;
  border-radius: .5rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

`;