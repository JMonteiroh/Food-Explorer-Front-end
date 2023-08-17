import { Container, Content } from "./styles";

import macaron from "../../assets/macaron.svg"

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function HomeAdmin() {
  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <div className="banner">
          <img src={macaron} alt="image of macarons and fruits" />
          <div className="letters">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Refeições">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <Section title="Pratos principais">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <Section title="Bebidas">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </Content>
    </Container>
  )
}