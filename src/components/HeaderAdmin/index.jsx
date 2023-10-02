import { Container, Content, Mobile, Desktop } from "./styles";
import { FiSearch, FiMenu } from 'react-icons/fi'
import { PiReceipt, PiSignOut } from "react-icons/pi";


import { Logo } from "../Logo"
import { Input } from "../Input"
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { useAuth } from "../../hooks/auth";



export function HeaderAdmin() {

  const { signOut } = useAuth();

  return (
    <Container>
      <Content>


        <Mobile className="mobile">
          <ButtonIcon className='btn-navbar' icon={FiMenu} size={32}/>

          <Logo isAdmin />

          

        </Mobile>

        <Desktop className="desktop">
          <Logo isAdmin className={'logo-desk'} />
          
          <Input icon={FiSearch} className='input' placeholder='Busque por pratos ou ingredientes' />

          <Button  className='new-plate'  title={'Novo prato'} />

          <ButtonIcon onClick={signOut} className='btn-signout' icon={PiSignOut} size={30}/>
        </Desktop>
      </Content>
    </Container>
  )
}