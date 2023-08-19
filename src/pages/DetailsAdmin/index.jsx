import { Container, Content, Descriptions } from "./styles";

import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Footer } from "../../components/Footer"
import { ButtonIcon } from "../../components/ButtonIcon";

import Image from "../../assets/image 2.png"
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";

export function DetailsAdmin() {
  
  return (
    <Container>
      <HeaderAdmin />

      <Content>
        <ButtonIcon className="back" icon={AiOutlineLeft} size={24} title={'Voltar'} />
        <Descriptions>
          <img src={Image} alt="Foto do prato" />

          <div className="informations">
            <h2 className="title">Salada Ravanello</h2>

            <p className="description" >
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div className="ingredients">
              <span>
                alface
              </span>
              <span>
                cebola
              </span>
              <span>
                pão naan
              </span>
              <span>
                pepino
              </span>
              <span>
                rabanete
              </span>
              <span>
                Tomate
              </span>
            </div>

            <Button className="edit-plate" title={"Editar Prato"} />
          </div>

        </Descriptions>
      </Content>
      <Footer />
    </Container>
  )
}