import { Container, Content } from "./styles";

export function IngredientBox({ children }) {
  return (
    <Container>
      <h2>Ingredientes</h2>
      <Content>
        {children}
      </Content>
    </Container>
  )
}