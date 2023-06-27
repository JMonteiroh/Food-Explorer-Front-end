import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  overflow-x: scroll;

  > h2 {
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 140%;
    flex-shrink: 0;

    color: ${({ theme }) => theme.colors.light_300};
  }
  
  `;

export const InnerContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: nowrap;
  width: fit-content;


  button {
    color: ${({ theme }) => theme.colors.light_100};
  }
`;