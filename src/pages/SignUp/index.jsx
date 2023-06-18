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
        <h1>Faça login</h1>
        <Input
          title={'Seu nome'}
          placeholder={'Exemplo: Maria da Silva'}
        />

        <Input
          title={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
        />

        <Input
          title={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
        />

        <Button title={'Criar conta'} />

        <ButtonText title={'Já tenho uma conta'} />

      </Form>
    </Container>
  )
}