import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: 'Roboto', sans-serif;
  display: grid;
  place-content: center;

  gap: 3.2rem;

  @media (min-width: 768px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 6.4rem;
  }
`;

export const Form = styled.form` 
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;

  > h1 {
    display: none;
  }
  @media (min-width: 768px){
    background-color: ${({ theme }) => theme.colors.dark_700};
    border-radius: 1.6rem;
    min-width: 47.8rem;

    padding: 6.4rem;

    > h1 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;

      display: flex;

      color: ${({ theme }) => theme.colors.light_100};
    }
  }

`;