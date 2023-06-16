import { Container } from "./styles";
import Polygon from '../../assets/polygon.svg'

export function Logo() {
  return (
    <Container>
      <img src={Polygon} />
      <h1>Food Explorer</h1>
    </Container>
  )
}