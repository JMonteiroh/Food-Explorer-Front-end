import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  margin-bottom: 10rem;

  > h2 {
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 140%;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 768px) {
    width: calc(100vw - 11rem);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 95vw;

  @media (min-width: 768px) {
    width: calc(100vw - 11rem);
  }
`;

export const Content = styled.div`
  display: flex;
  width: 95vw;
  position: relative;

  > .arrow-left,
  .arrow-right {
    color: ${({ theme }) => theme.colors.light_100};
    z-index: 999;
    position: absolute;
    padding: 0 .5rem 0;
    top: 45%;
  }
  
  > .arrow-left {
    left: 0rem;
  }
  
  > .arrow-right {
    right: 0;
  }
  
  @media (min-width: 768px) {
    width: calc(100vw - 11rem);
  }
`;

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.6rem;
`;