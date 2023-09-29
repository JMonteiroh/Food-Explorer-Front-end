import { Container, Content } from "./styles";

import { AiOutlineLeft, AiOutlineUpload} from "react-icons/ai";

import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { SelectField } from "../../components/SelectField";
import { Ingredients } from "../../components/Ingredients";
import { IngredientBox } from "../../components/IngredientBox";

export function EditPlate() {
  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <ButtonIcon className="btn-back" icon={AiOutlineLeft} size={16} title={'Voltar'} />

        <h2>Editar prato</h2>

        <Input hasATitle  icon={AiOutlineUpload} type={'file'} title={'Imagem do prato'} placeholder={'Ex: Salada Ceasar'} />
        
        <Input hasATitle type={'text'} title={'Nome'} placeholder={'Ex: Salada Ceasar'} />

        <SelectField title={"Categoria"} />

        <IngredientBox>
          <Ingredients />
          <Ingredients />
          <Ingredients isNew />
        </IngredientBox>

        <Input hasATitle type={'text'} title={'Preço'} placeholder={'R$ 00,00'}/>

        <Textarea title={'Descrição'} placeholder={`Fale brevemente sobre o prato, seus ingredientes e composição.`} />
      
        <div className="btns-edit">
          <Button className={'delete-plate'} title={'Excluir prato'}/>
          <Button className={'save-plate'} title={'Salvar alterações'}/>
        </div>

      </Content>

      <Footer />
    </Container>
  )
}