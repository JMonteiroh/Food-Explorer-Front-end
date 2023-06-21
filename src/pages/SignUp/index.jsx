import { Container, Form } from "./styles";

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <Input
          hasATitle
          title={'Seu nome'}
          placeholder={'Exemplo: Maria da Silva'}
        />

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

        <Button title={'Criar conta'} />

        <ButtonText title={'Já tenho uma conta'} />

      </Form>
    </Container>
  )
}