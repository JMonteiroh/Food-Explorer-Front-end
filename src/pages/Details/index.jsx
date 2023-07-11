import { Container, Content, Descriptions } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonIcon } from "../../components/ButtonIcon";

import Image from "../../assets/image 2.png"

export function Details() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonIcon className="back" icon={AiOutlineLeft} size={16} title={'Voltar'} />
        <Descriptions>
          <img src={Image} alt="Foto do prato" />

          <h2 className="title">Salada Ravanello</h2>

          <p className="description" >
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <div className="ingredients">
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
            <span>
              Cebola
            </span>
          </div>

        </Descriptions>
      </Content>
      <Footer />
    </Container>
  )
}