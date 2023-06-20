import { Container, Content } from "./styles";

import navbar from '../../assets/navbar.svg'
import receipt from '../../assets/receipt.svg'

import { Logo } from "../Logo"
import { Input } from "../Input"
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";



export function Header() {
  return (
    <Container>
      <Content>
        <ButtonIcon className='mobile' image={navbar} alt="Botão de navbar"/>

        <Logo size={0.8} />

        <Input className='desktop' />

        <Button className='desktop'  title={'Pedido'} />

        <div className="receipt mobile">
          <span>0</span>
          <ButtonIcon  image={receipt} alt="Botão de receipt"/>
        </div>
      </Content>
    </Container>
  )
}