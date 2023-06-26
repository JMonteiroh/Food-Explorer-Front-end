import { Container } from "./styles";

import { BsHeart } from "react-icons/bs"
import { AiOutlineRight, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { ButtonIcon } from "../ButtonIcon";
import { Button } from "../Button";

import Image from "../../assets/image 2.png"

export function Card() {
  return (
    <Container>
      <ButtonIcon className="favorite" icon={BsHeart} size={24}/>

      <img src={Image} alt="Titulo do prato" />

      <h3>Salada Ravanello <AiOutlineRight/></h3>

      <span className="price">R$ 49,97</span>

      <div className="quantity">
        <ButtonIcon className="minus" icon={AiOutlineMinus} size={24} />

        <span className="value">01</span>

        <ButtonIcon className="plus" icon={AiOutlinePlus} size={24}/>

      </div>
        <Button title="incluir" />
    </Container>
  )
}