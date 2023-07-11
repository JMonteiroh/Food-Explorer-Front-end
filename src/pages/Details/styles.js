import { styled } from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
  grid-template-areas:
   "header"
   "content"
   "footer"
  ;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  grid-area: content;
  width: 100%;
  
  padding: 20rem 5.6rem 10rem;

  > .back {
    position: absolute;
    left: 5.6rem;
    top: 17rem;
  }

  `;

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  
  > img {
    width: 26rem;
    height: 26rem;
  
    border-radius: 50%;
  }
  > .title {
    color: ${({ theme }) => theme.colors.light_300};;
    font-family: Poppins;
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: .8rem;
  }
  
  .description {
    color: ${({ theme }) => theme.colors.light_300};

    text-align: center;
    font-family: Poppins;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: .8rem;
  }
  
  > .ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
    justify-content: center;

    > span {
      display: flex;
      padding: .4rem .8rem;
      justify-content: center;
      align-items: center;
      gap: .8rem;

      border-radius: .5rem;
      background-color: ${({ theme }) => theme.colors.dark_1000};

      color: ${({ theme }) => theme.colors.light_100};
      text-align: center;

      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

`;