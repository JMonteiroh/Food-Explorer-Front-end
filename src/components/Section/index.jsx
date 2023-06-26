import { Container } from "./styles";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import { ButtonIcon } from "../ButtonIcon"

export function Section({ title, children }) {
  return (
    <Container>
        <h2>{title}</h2>
      <div>
        <ButtonIcon className="desktop" size={24} icon={AiOutlineLeft}/>
        {children}
        <ButtonIcon className="desktop" size={24} icon={AiOutlineRight} />
      </div>
    </Container>
  );
}