import { Container } from "./styles";
import Polygon from '../../assets/polygon.svg'

export function Logo({ size }) {
  return (
    <Container size={size} className="logo" >
      <img src={Polygon} />
      <h1>food explorer</h1>
    </Container>
  )
}