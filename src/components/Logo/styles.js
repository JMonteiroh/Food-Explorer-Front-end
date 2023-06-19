import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  > img {
    height: calc(${props => props.size} * 4.3rem);
    width: calc(${props => props.size} * 4.3rem);
    margin-right: calc(${props => props.size} * 1.1rem);
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: calc(${props => props.size} * 3.7rem);
    line-height: calc(${props => props.size} * 4.4rem);
  }
`;