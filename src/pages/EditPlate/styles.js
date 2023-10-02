import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;


  padding: 16rem 3.2rem 0;

  display: grid;
  justify-items: center;
  grid-template-areas:
   "header"
   "content"
   "footer"
  ;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-area: "content";
  gap: 2.4rem;

  margin-bottom: 10.3rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > .btn-back {
    width: fit-content;
    > span {
      font-family: Poppins;
      font-size: 1.6rem;
    }
  }

  .file-inpt {
    display: none;
  }

  .bg-inpt {
    background-color: ${({ theme }) => theme.colors.dark_800};
  }

  .btns-edit {
    display: flex;
    gap: 1.9rem;

      .save-plate {
        background-color: ${({ theme }) => theme.colors.tomato_400 };
        padding: 1.2rem 2.4rem;
      }
    
      .delete-plate {
        background-color: ${({ theme }) => theme.colors.dark_800 };
        padding: 1.2rem 2.4rem;
      }
  }

  .box-1 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .box-2 {
    display: grid;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media (min-width: 768px) {
    .box-1 {
      flex-direction: row;

    }

    .box-2 {
      grid-template-columns: 4fr 1fr;
    }

    .file-btn {
      max-width:21.5rem ;
    }

    .btns-edit {
      margin-left: 52.6rem ;
      width: 45%;
      display: flex;
      justify-content: flex-end;
    }
  } 

`;