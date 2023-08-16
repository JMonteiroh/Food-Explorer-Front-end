import { Container, Content, Mobile, Desktop } from "./styles";
import { FiSearch, FiMenu } from 'react-icons/fi'
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Logo } from "../Logo"
import { Input } from "../Input"
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { useAuth } from "../../hooks/auth";



export function Header() {

  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Mobile className="mobile">
          <ButtonIcon className='btn-navbar' icon={FiMenu} size={32}/>

          <Logo />

          <div className="receipt">
            <div className="counter">
              <span>0</span>
            </div>
            <ButtonIcon icon={PiReceipt}  size={32} className='btn-receipt'/>
          </div>
        </Mobile>

        <Desktop className="desktop">
          <Logo />
          
          <Input icon={FiSearch} className='input' placeholder='Busque por pratos ou ingredientes' />

          <Button icon={PiReceipt} size={24} className='order'  title={'Pedido '} hasACounter />

          <ButtonIcon onClick={signOut} className='btn-signout' icon={PiSignOut} size={32}/>
        </Desktop>
      </Content>
    </Container>
  )
}