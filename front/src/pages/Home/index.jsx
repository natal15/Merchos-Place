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

  const [selectedDogname, setSelectedDogname] = useState('');
  const [selectedMedname, setSelectedMedname] = useState('');
  const [selectedFoodname, setSelectedFoodname] = useState('');
 
  const handleDognameChange = (event) => {
    setSelectedDogname(event.target.value);
  };
  
  const handleMednameChange = (event) => {
    setSelectedMedname(event.target.value);
  };
  
  const handleFoodnameChange = (event) => {
    setSelectedFoodname(event.target.value);
  };
  
  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    console.log("hola", event)
    console.log("Submitting form...");
    console.log("Selected Dog Name:", selectedDogname);
    console.log("Selected Med Name:", selectedMedname);
    console.log("Selected Food Name:", selectedFoodname);

    try{
  
    await newMed({dogname: selectedDogname, medname: selectedMedname});
    await newFood({dogname: selectedDogname, foodname: selectedFoodname});

    setSelectedDogname('');
    setSelectedMedname('');
    setSelectedFoodname('');
  } catch (error) {
    console.error("Error submitting form:", error);
  }}
  
  
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
          <Styled.DoggyText key={dogname}>
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
    <DogForm onSubmit={handleFormSubmit} button="+ cosites">
      <div className="meds">
      <Styled.Card htmlFor="dogy">
        Choose dog:
      <Styled.Select value={selectedDogname} onChange={handleDognameChange}>
      {dogs?.data?.map(({ dogname }) => (
        
        <Styled.Options key={dogname} value={dogname}>
            {dogname}
        </Styled.Options>
        ))}
      </Styled.Select>
      </Styled.Card>
      <Styled.Card htmlFor="meds_dog">
        Choose meds:
      <Styled.Select value={selectedMedname} onChange={handleMednameChange}>
      {meds?.data?.map(({ medname }) => (
        
        <Styled.Options key={medname} value={medname}>
            {medname}
        </Styled.Options>
        ))}
      </Styled.Select>
      </Styled.Card>
      <Styled.Card htmlFor="foods_dog">
        Choose foods:
      <Styled.Select value={selectedFoodname} onChange={handleFoodnameChange}>
      {foods?.data?.map(({ foodname }) => (
        
          <Styled.Options key={foodname} value={foodname}>
            {foodname}
          </Styled.Options>
        ))}
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