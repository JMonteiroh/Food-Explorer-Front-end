import { Container, Content } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import { Header } from "../../components/Header"
import { ButtonIcon } from "../../components/ButtonIcon";

export function Details() {
  return (
    <Container>
      <Header />

      <Content>
      <ButtonIcon icon={AiOutlineLeft} size={32} title={'Voltar'} />
      </Content>
    </Container>
  )
}