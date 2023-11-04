import { Container, Content } from "./styles";

import { BsHeart } from "react-icons/bs"
import { AiOutlineRight, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { ButtonIcon } from "../ButtonIcon";
import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { api } from "../../service/api"

export function Card({data}) {

  const avatarUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null

  const navigate = useNavigate()
  
  function handleDetails() {
    navigate(`/details/${data.id}`);

  }

  return (
    <Container onClick={handleDetails}>
      {
        data &&
          <Content>
            <ButtonIcon className="favorite" icon={BsHeart} size={24}/>


            <img src={avatarUrl} alt={data.name} />

            <h3>{data.name} <AiOutlineRight/></h3>

            <span className="price">R$ {data.price}</span>

            <div className="quantity">
              <ButtonIcon className="minus" icon={AiOutlineMinus} size={24} />

              <span className="value">01</span>

              <ButtonIcon className="plus" icon={AiOutlinePlus} size={24}/>

            </div>

            <Button title="incluir" />
          </Content>
      }
    </Container>
  )
}