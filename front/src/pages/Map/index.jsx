import { Link } from "wouter";
import { useRoute } from "wouter"
import { useQuery } from "react-query"
import { dogData } from "../../services/dogs"
import { useDelete } from "../../hooks/useDog";
import Button from "../../components/Button";
import Styled from './styles'
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import Modal from "../../components/Modal";
import Logo from "../../components/Logo"
import Footer from "../../components/Footer";


const Map = () => {
  const { data: user } = useUser();
  const { eraseDog } = useDelete();
  const [, params] = useRoute("/map/:dogname");

  

  const { data: dog, isFetching } = useQuery(["dog", params], () => dogData(params));

  const handleDelete = () => {
    
    const confirmed = window.confirm("Are you sure you want to delete this dog?");
    if (confirmed) {
      eraseDog(params); 
      window.location.href = "/";
      
    }
  };

  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={setShowModal} />

  return (<>
    <div>
    <Styled.User onClick={() => setShowModal(true)}>
      <p>{user.data.username} 😀</p>
    </Styled.User>
    <Styled.StyledH1>Merchos Place</Styled.StyledH1>
    <Logo />
    <Styled.DoggyTitle>
      This screen presents the data of "{params?.dogname}"
    </Styled.DoggyTitle>
    </div>
    <Styled.CuteDiv>
    <Styled.DoggyText>Chenil: {dog?.data?.dog?.chenil} 🏠</Styled.DoggyText>
    <Styled.DoggyText>Medicines: {dog?.data?.dog?.array_agg.slice(1, -1)} 💊</Styled.DoggyText>
    <Styled.DoggyText>Food: {dog?.data?.dog?.foodname} 🍗</Styled.DoggyText>
    <Styled.DoggyText>Eat Behavior: {dog?.data?.dog?.eatbehavior} 🐕</Styled.DoggyText>
    <Styled.DoggyText>Castrated: {dog?.data?.dog?.castrated} 🐾</Styled.DoggyText>
    </Styled.CuteDiv>
    <Styled.Section>
      <Button onClick={handleDelete}>Delete Dog</Button>
      <Link href={"/"}>
        <Styled.DoggyText>
        Return to Home Screen
        </Styled.DoggyText>
        </Link>
      </Styled.Section>
    <Footer>
      © 2023 Dog Finder. All rights reserved. Created by Team Paws
    </Footer>
   
  </>
  )
}

export default Map;