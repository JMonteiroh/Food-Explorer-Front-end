import { Container, Content } from "./styles";

import macaron from "../../assets/macaron.svg"

import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from '../../service/api';

export function Home() {
  const [ search, setSearch ] = useState("");

  const [ plates, setPlates ] = useState([])


  const navigate = useNavigate();


  function handleDetails(id) {
    navigate(`/details/${id}`);

  }

  useEffect(() => {
    async function fetchPlates() {
      const category = "bebidas"
      const response = await api.get(`/plates?name=${search}&category${category}`);
      console.log(response.data)
      setPlates(response.data);
    }


    fetchPlates();

  },[search])

  return (
    <Container>
      <Header />
      <Content>
        <div className="banner" >
          <img src={macaron} alt="image of macarons and fruits" />
          <div className="letters">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Refeições">
          {
            plates.map(plate => (
              <Card 
                key={String(plate.id)}
                data={plate}
                onClick={() => handleDetails(plate.id)}
              />
            ))
          }
        </Section>
        <Section title="Pratos principais">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <Section title="Bebidas">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}