import { Link } from "wouter";
import React from 'react';
import Menu from '../../components/Menu';
import Modal from "../../components/Modal";
// import Tab from '../../components/Tab';
import Styled from './styles'
import { useDog, useData, useCreate, useDelete } from "../../hooks/useDog";
import { useUser } from "../../hooks/useUser";
import { useState, useEffect } from "react";
import { createDog } from "../../services/dogs"
import { useMutation } from 'react-query'
import DogForm from "../../components/DogForm";
import Input from "../../components/Input";
import { validations } from "../../constants";







const Home = () => {

  const { data: user } = useUser();
  const { data: dogs } = useDog();
  const { newDog } = useCreate();
 

  const { required } = validations;

  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={setShowModal} />;

  return (<>
    <Styled.User onClick={() => setShowModal(true)}>
      <p>{user.data.username} 🦝</p>
    </Styled.User>
    <h1>Merchos Place</h1>
    <div>
      <Styled.Probe>

        {dogs?.data?.map(({ dogname }) => <Link href={`/map/${dogname}`}>
          <p>
            {dogname} - 🐶🐺

          </p>
          

        </Link>)}
        

      </Styled.Probe>
    </div>
    <DogForm onSubmit={newDog} button="Otro perrito piloto">
      <Input
        name="dogname"
        label={true}
        placeholder="dogname"
        validation={{ required }}
      />
      <Input
        name="chenil"
        label={true}
        placeholder="chenil"
        validation={{ required }}
      />
      <Input
        name="gender"
        label={true}
        placeholder="gender"
        validation={{ required }}
      />
      <Input
        name="takesmeds"
        label={true}
        placeholder="takesmeds"
        validation={{ required }}
      />
      <Input
        name="specialfood"
        label={true}
        placeholder="specialfood"
        validation={{ required }}
      />
      <Input
        name="eatbehavior"
        label={true}
        placeholder="eatbehavior"
        validation={{ required }}
      />
      <Input
        name="castrated"
        label={true}
        placeholder="castrated"
        validation={{ required }}
      />
    </DogForm>
    <form>
      <div>
        <input name="dogname"
          label={true}
          placeholder="dogname"
          validation={{ required }}>
        </input>
      </div>
      <label htmlFor="meds_dog">Choose meds:
        <select name="meds" id="meds_dog">
          <option value="vitamins">Vitamins</option>
          <option value="bones">Bones</option>
          <option value="digest">Digest</option>
          <option value="dermatologic">Dermatologic</option>
          <option value="cardiac">Cardiac</option>

        </select>
      </label>
      <div>
        <button>+ cositas</button>
      </div>
    </form>

    <div>
      <p>Perretes</p>
    </div>


  </>)
}



export default Home;