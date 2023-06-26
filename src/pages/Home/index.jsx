import { Container, Content } from "./styles";

import macaron from "../../assets/macaron.svg"

import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="banner">
          <img src={macaron} alt="image of macarons and fruits" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com <br/>ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Refeições">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}