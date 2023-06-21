import { Container, Content } from "./styles";
import { FiSearch } from 'react-icons/fi'

import navbar from '../../assets/navbar.svg'
import receipt from '../../assets/receipt.svg'
import signout from '../../assets/signout.svg'

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

        <div className="receipt mobile">
          <span>0</span>
          <ButtonIcon  image={receipt} alt="Botão de receipt"/>
        </div>

        <Input icon={FiSearch} className='desktop' placeholder='Busque por pratos ou ingredientes' />

        <Button image={receipt} className='desktop order'  title={'Pedido '} hasACounter />

        <ButtonIcon className='desktop' image={signout} alt='Botão para sair.'/>
      </Content>
    </Container>
  )
}