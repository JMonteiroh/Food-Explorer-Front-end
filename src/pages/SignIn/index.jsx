import { Container, Form } from "./styles";

import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Input
          title={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
        />
        <Input
          title={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
        />

      </Form>
    </Container>
  )
}