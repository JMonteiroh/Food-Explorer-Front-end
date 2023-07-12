import { Container, Content, Descriptions } from "./styles";

import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonIcon } from "../../components/ButtonIcon";

import Image from "../../assets/image 2.png"
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";

export function Details() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonTitle = windowWidth >= 768 ? 'Incluir - R$ 25,00' : 'Pedir - R$ 25,00';


  return (
    <Container>
      <Header />

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

            <div className="quantity">
              <ButtonIcon className="minus" icon={AiOutlineMinus} size={27} />

              <span className="value">01</span>

              <ButtonIcon className="plus" icon={AiOutlinePlus} size={27}/>

              <Button className="ask" icon={PiReceipt} size={22} title={buttonTitle} />

            </div>
          </div>

        </Descriptions>
      </Content>
      <Footer />
    </Container>
  )
}