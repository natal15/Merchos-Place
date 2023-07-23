import { Link } from "wouter";
import React from 'react';
import Menu from '../../components/Menu';
import Modal from "../../components/Modal";
// import Tab from '../../components/Tab';
import Styled from './styles'
import { useDog, useData, useCreate, useDelete, useMed, useFood, useNewMed, useNewFood } from "../../hooks/useDog";
import { useUser } from "../../hooks/useUser";
import { useState, useEffect } from "react";
import { createDog } from "../../services/dogs"
import { useMutation } from 'react-query'
import DogForm from "../../components/DogForm";
import InputDog from "../../components/InputDog";
import { validations } from "../../constants";
import Logo from "../../components/Logo"
import Footer from "../../components/Footer";

const Home = () => {

  const { data: user } = useUser();
  const { data: dogs } = useDog();
  const { newDog } = useCreate();
  const { data: meds } = useMed();
  const { data: foods } = useFood();
  const { newMed } = useNewMed();
  const { newFood } = useNewFood();

  // const handleOptionSelect = (selectedOption) => {
  //   console.log("Selected Option:", selectedOption);
    
  // };
  
  
  const { required } = validations;

  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={setShowModal} />;
 
  return (<>
    <Styled.User onClick={() => setShowModal(true)}>
      <p>{user.data.username} 🦝</p>
    </Styled.User>
    <h1>Merchos Place</h1>
    <Logo />
    <Styled.DoggyTitle>
      Perritos en adopción 💕👑🏻💖
    </Styled.DoggyTitle>
    <Styled.CuteDiv>
      <Styled.Probe>
        {dogs?.data?.map(({ dogname }) => 
        <Link href={`/map/${dogname}`}>
          <Styled.DoggyText>
            {dogname} - 🐶🐺
          </Styled.DoggyText>
        </Link>)}
      </Styled.Probe>
    </Styled.CuteDiv>
    <Styled.DoggyTitle>
      Add new Perrito 
    </Styled.DoggyTitle>
    <DogForm onSubmit={newDog} button="Otro perrito piloto">
      <InputDog
        name="dogname"
        label={true}
        placeholder="dogname"
        validation={{ required }}
      />
      <InputDog
        name="chenil"
        label={true}
        placeholder="chenil"
        validation={{ required }}
      />
      <InputDog
        name="gender"
        label={true}
        placeholder="gender"
        validation={{ required }}
      />
      <InputDog
        name="takesmeds"
        label={true}
        placeholder="takesmeds"
        validation={{ required }}
      />
      <InputDog
        name="specialfood"
        label={true}
        placeholder="specialfood"
        validation={{ required }}
      />
      <InputDog
        name="eatbehavior"
        label={true}
        placeholder="eatbehavior"
        validation={{ required }}
      />
      <InputDog
        name="castrated"
        label={true}
        placeholder="castrated"
        validation={{ required }}
      />
    </DogForm>
    <Styled.DoggyTitle>
      Need to update meds and food 
    </Styled.DoggyTitle>
    <DogForm onSubmit={newMed(dogname, medname)} button="+ cosites">
      <div className="meds">
      <Styled.Card htmlFor="dogy">Choose dog:
      <Styled.Select>
      {dogs?.data?.map(({ dogname }) => 
        
        <Styled.Options>
            {dogname}
        </Styled.Options>
        )}
      </Styled.Select>
      </Styled.Card>
      <Styled.Card htmlFor="meds_dog">Choose meds:
      <Styled.Select>
      {meds?.data?.map(({ medname }) => 
        
        <Styled.Options>
            {medname}
        </Styled.Options>
        )}
      </Styled.Select>
      </Styled.Card>
      <Styled.Card htmlFor="foods_dog">Choose foods:
      <Styled.Select>
      {foods?.data?.map(({ foodname }) => 
        
          <Styled.Options>
            {foodname}
          </Styled.Options>
        )}
      </Styled.Select>
      {/* <Menu onSelect={handleOptionSelect} /> */}
      </Styled.Card>
    </div>
      
      {/* <label htmlFor="meds_dog">Choose meds:
        <select name="meds" id="meds_dog">
          <option value="vitamins">Vitamins</option>
          <option value="bones">Bones</option>
          <option value="digest">Digest</option>
          <option value="dermatologic">Dermatologic</option>
          <option value="cardiac">Cardiac</option>

        </select>
      </label> */}
    </DogForm>
    <Footer>
      © 2023 Dog Finder. All rights reserved. Created by Team Paws
    </Footer>
  </>)
}



export default Home;