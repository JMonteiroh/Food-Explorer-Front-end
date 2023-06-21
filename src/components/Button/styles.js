import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 3.2rem;

  border: none;
  border-radius: .5rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;



  &:disabled {
    opacity: 0.5;
  }
`;