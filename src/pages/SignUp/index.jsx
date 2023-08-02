import { Container, Form } from "./styles";

import { api } from "../../service/api"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();


  function handleSignUp(){
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <Input
          hasATitle
          title={'Seu nome'}
          placeholder={'Exemplo: Maria da Silva'}
          onChange={e => setName(e.target.value)}
        />

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

        <Button 
          title={'Criar conta'}
          onClick={handleSignUp}
        />

        <ButtonText 
          title={'Já tenho uma conta'}
          onClick={ () => navigate("/") }
        />

      </Form>
    </Container>
  )
}