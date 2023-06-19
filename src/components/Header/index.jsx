import { Container, Content } from "./styles";

import { IconMenu } from "../../assets/IconMenu"
import { Logo } from "../Logo"
import { IconReceipt } from "../../assets/receipt";



export function Header() {
  return (
    <Container>
      <Content>
        <IconMenu size={16} />
        <Logo size={0.8} />
        <IconReceipt size={18} />
      </Content>
    </Container>
  )
}