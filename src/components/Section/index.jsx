import { Container, Wrapper, Content, Slider } from "./styles";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import { ButtonIcon } from "../ButtonIcon"

export function Section({ title, children }) {
  return (
    <Container>
        <h2>{title}</h2>

      <Wrapper>
        <Content>
          <ButtonIcon className="desktop arrow-left" size={24} icon={AiOutlineLeft}/>
           <Slider>
            {children}
           </Slider>
          <ButtonIcon className="desktop arrow-right" size={24} icon={AiOutlineRight} />
        </Content>
      </Wrapper>
    </Container>
  );
}