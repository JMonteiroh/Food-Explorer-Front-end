import { Container, Content } from "./styles";

import macaron from "../../assets/macaron.svg"

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section";
import { CardAdmin } from "../../components/CardAdmin";

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
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
        </Section>
        <Section title="Pratos principais">
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
        </Section>
        <Section title="Bebidas">
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
          <CardAdmin />
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}