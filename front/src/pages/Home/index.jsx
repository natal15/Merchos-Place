import { Link } from "wouter";
import React from 'react';
import Menu from '../../components/Menu';
import Modal from "../../components/Modal";
import Styled from './styles'
import { useDog } from "../../hooks/useDog";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";



const Home = () => {
  const { data: dogs } = useDog();
  const { data: user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const menuItems = [
    {
      id: 1,
      title: 'Refugio',
      subMenuItems: [
        {
          id: 11,
          title: 'Especiales',
          subMenuItems: [],
        },
        {
          id: 12,
          title: 'Sanos',
          subMenuItems: [
            {
              id: 121,
              title: '${dogs?.data?.dogname}',
              subMenuItems: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Acogidas',
      subMenuItems: [],
    },
  ];

  if (showModal) return <Modal handleModal={setShowModal} />;

  return (<>
    <Styled.User onClick={() => setShowModal(true)}>
      <p>{user.data.username}</p>
    </Styled.User>
    <h1>Merchos Place</h1>
    <div>
      <Styled.Probe>
        {menuItems.map((item) => (
          <Menu key={item.id} title={item.title} subMenuItems={item.subMenuItems} />
        ))}
      </Styled.Probe>
    </div>

    <div>

      <Link to="/map">Refugio no mapa</Link>
      <p>Perretes{dogs?.data?.dogname}</p>
    </div>

  </>)
}



export default Home;