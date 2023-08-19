import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi"
import { AiOutlineRight, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { ButtonIcon } from "../ButtonIcon";
import { Button } from "../Button";

import Image from "../../assets/image 2.png"

export function CardAdmin() {
  return (
    <Container>
      <ButtonIcon className="favorite" icon={PiPencilSimple} size={24}/>

      <img src={Image} alt="Titulo do prato" />

      <h3>Salada Ravanello <AiOutlineRight/></h3>

      <span className="price">R$ 49,97</span>

    </Container>
  )
}