import { styled } from "styled-components";

export const Container = styled.button`
  min-width: 21rem;

  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  align-items: center;
  gap: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  border-radius: .8rem;
  background: ${({ theme }) => theme.colors.dark_200};

  > .favorite {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    display: flex;
    width: 88px;
    height: 88px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
  }

  >h3 {
    display: flex;
    flex-shrink: 0;
    align-self: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.light_300};
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;         
    font-weight: 500;
    line-height: 2.4rem;

    > svg {
      font-size: 1.2rem;
    }
  }

  > .price {
    color: ${({ theme }) => theme.colors.cake_200};
    text-align: center;

    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    line-height: 100%;
  }

  > .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1.4rem;

    > .value {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      line-height: 100%;
      color: ${({ theme }) => theme.colors.light_300};
    }
  }

`;