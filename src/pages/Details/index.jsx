import { Container, Content, Descriptions } from "./styles";

import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonIcon } from "../../components/ButtonIcon";

import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";

export function Details() {

  
  const [ data, setData ] = useState([]);
  const [ ingredients, setIngredients ] = useState([]);
  const [ windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ buttonTitle, setButtonTitle ] = useState();
  
  const avatarUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null

  async function fetchIngredients () {
    const response = await api.get("/ingredients");
    setIngredients(response.data)
  }
  
  async function fetchPlate() {
    try {
      const response = await api.get(`/plates/${params.id}`);
    
      setData(response.data)
      setButtonTitle(windowWidth >= 768 ? `Incluir - R$ ${response.data.price}` : `Pedir - ${response.data.price}`)
    } catch (error) {
      console.error("Erro ao buscar os dados do prato.", error);
    }
  }

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate('/')
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    fetchPlate();
    fetchIngredients();

    return () => {
      window.removeEventListener("resize", handleResize);
    };



  }, [windowWidth]);

  return (
    <Container>
      <Header />

      <Content>
        <ButtonIcon className="back" icon={AiOutlineLeft} size={24} title={'Voltar'} onClick={handleBack} />
        {
          data && 
          <Descriptions>
            <img src={avatarUrl} alt={data.name} />

            <div className="informations">
                <h2 className="title">{data.name}</h2>

                <p className="description" >
                  {data.description}
                </p>

                  {
                    data.ingredients &&
                      <div className="ingredients">
                        { 
                          data.ingredients.map(ingredient => (
                            <span key={String(ingredient.id)}>{ingredient.name}</span>
                          ))
                        }
                      </div>
                  }

                <div className="quantity">
                  <ButtonIcon className="minus" icon={AiOutlineMinus} size={27} />

                  <span className="value">01</span>

                  <ButtonIcon className="plus" icon={AiOutlinePlus} size={27}/>

                  <Button className="ask" icon={PiReceipt} size={22} title={buttonTitle} />

                </div>
              </div>

            </Descriptions>
        }
        </Content>
      <Footer />
    </Container>
  )
}