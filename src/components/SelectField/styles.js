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
  display: flex;
  padding: .9rem 1.4rem;
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
    width: 100%;
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: 13.7rem;
    left: 0;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.colors.dark_900};
    padding: .9rem 1.4rem;

    border: 1px solid ${({ theme }) => theme.colors.light_600};

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

        border-bottom: 1px solid ${({ theme }) => theme.colors.light_600};
        border-radius: .5rem;
        padding-left: 1rem;
      }
    }
  }
`;