import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > h3 {
    color: ${({ theme }) => theme.colors.light_500};

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;

    margin-bottom: .8rem;
  }
  > textarea {
    width: 100%;
    height: 17.2rem;
    
    display: flex;
    background-color: ${({ theme }) => theme.colors.dark_800};
    border-radius: .8rem;
    padding: 1.4rem;
    gap: 1.4rem;
    border: none;
    resize: none;
    flex: 1 0 0 ;
    
    color: ${({ theme }) => theme.colors.light_500};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;


  }
`;