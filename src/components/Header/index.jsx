import { Container, Content, Mobile, Desktop } from "./styles";
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
        <Mobile className="mobile">
          <ButtonIcon className='btn-navbar' image={navbar} alt="Botão de navbar"/>

          <Logo />

          <div className="receipt">
            <div className="counter">
              <span>0</span>
            </div>
            <ButtonIcon className='btn-receipt' image={receipt} alt="Botão de receipt"/>
          </div>
        </Mobile>

        <Desktop className="desktop">
          <Logo />
          
          <Input icon={FiSearch} className='input' placeholder='Busque por pratos ou ingredientes' />

          <Button image={receipt} className='order'  title={'Pedido '} hasACounter />

          <ButtonIcon className='btn-signout' image={signout} alt='Botão para sair.'/>
        </Desktop>
      </Content>
    </Container>
  )
}