import { Container } from "./styles";
import { BsHexagonFill } from 'react-icons/bs'


export function Logo({ isAdmin: isAdmin = false}) {
  return (
    <Container className="logo" >
      <BsHexagonFill size={24}/>
      <h1>food explorer {isAdmin && <span>admin</span>}</h1>
    </Container>
  )
}