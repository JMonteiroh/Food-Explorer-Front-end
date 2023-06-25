import { Container } from "./styles";
import { BsHexagonFill } from 'react-icons/bs'


export function Logo() {
  return (
    <Container className="logo" >
      <BsHexagonFill size={24}/>
      <h1>food explorer</h1>
    </Container>
  )
}