import { styled } from "styled-components";

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

export const MenuBox = styled.div`
  min-height: 6rem;
  display: flex;
  padding: 1.6rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  border-radius: .5rem;
  background: ${({ theme }) => theme.colors.dark_900};
  
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.colors.light_400};

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.light_400};
  }


  > .dropdown-options {
    width: 95%;
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: 10.5rem;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.colors.dark_900};
    padding: 1.6rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.light_400};
        cursor: pointer;
        line-height: 3rem;

        border: 1px solid #ccc;
        border-radius: .5rem;
        padding-left: 5rem;
      }
    }
  }
`;