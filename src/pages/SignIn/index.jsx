import { Container, Form } from "./styles";

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <Input
          hasATitle
          title={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
        />

        <Input
          hasATitle
          title={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
        />

        <Button title={'Entrar'} />

        <ButtonText title={'Criar conta'} />

      </Form>
    </Container>
  )
}