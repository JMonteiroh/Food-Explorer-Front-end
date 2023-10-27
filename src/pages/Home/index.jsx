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

  const [ platesMeals, setPlatesMeals ] = useState([])
  const [ platesDrinks, setPlatesDrinks ] = useState([])
  const [ platesDesserts, setPlatesDesserts ] = useState([])


  const navigate = useNavigate();



  async function fetchPlatesMeals() {
      const category = "refeições";
      const response = await api.get(`/plates?name=${search}&category=${category}`);
      setPlatesMeals(response.data);
    }
  async function fetchPlatesDrinks() {
    const category = "bebidas";
    const response = await api.get(`/plates?name=${search}&category=${category}`);
    setPlatesDrinks(response.data);
  }
  
  async function fetchPlatesDesserts() {
    const category = "doces";
    const response = await api.get(`/plates?name=${search}&category=${category}`);
    setPlatesDesserts(response.data);
  }

  useEffect(() => {

    fetchPlatesMeals();
    fetchPlatesDrinks();
    fetchPlatesDesserts();
    
    
  },[])
  
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
            platesMeals.map(plate => (
              <Card 
                key={String(plate.id)}
                data={plate}
              />
            ))
          }
        </Section>
        <Section title="Sobremesas">
          {
            platesDesserts.map(plate => (
              <Card 
                key={String(plate.id)}
                data={plate}
              />
            ))
          }
        </Section>
        <Section title="Bebidas">
          {
            platesDrinks.map(plate => (
              <Card 
                key={String(plate.id)}
                data={plate}
              />
            ))
          }
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}