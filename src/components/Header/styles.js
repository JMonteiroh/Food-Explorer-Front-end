import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.colors.dark_700};

  display: grid;
  grid-area: header;
  
  padding: 6rem 0 2.8rem 0;
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
