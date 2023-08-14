import { Container, Form } from "./styles";

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignIn() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <Input
          hasATitle
          title={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          hasATitle
          title={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
          onChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn} title={'Entrar'} />

        <ButtonText onClick={() => navigate('/register')} title={'Criar conta'} />

      </Form>
    </Container>
  )
}