import { Container, Content } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

export function NewPlate() {
  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <ButtonIcon className="back" icon={AiOutlineLeft} size={24} title={'Voltar'} />
        <Input />
      </Content>

      <Footer />
    </Container>
  )
}