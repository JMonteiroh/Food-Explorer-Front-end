import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 4.8rem;
  padding: .4rem .8rem;
  align-items: center;
  gap: 1.6rem;

  border-radius: .8rem;
  background: ${({ theme }) => theme.colors.dark_800};
`;