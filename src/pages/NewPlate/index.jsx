import { Container, Content } from "./styles";

import { AiOutlineLeft} from "react-icons/ai";

import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

export function NewPlate() {
  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <h2>Novo prato</h2>
        
        <ButtonIcon className="btn-back" icon={AiOutlineLeft} size={16} title={'Voltar'} />

        <Input hasATitle  type={'file'} title={'Nome'} placeholder={'Ex: Salada Ceasar'} />
        
        <Input hasATitle type={'text'} title={'Nome'} placeholder={'Ex: Salada Ceasar'} />
      </Content>

      <Footer />
    </Container>
  )
}