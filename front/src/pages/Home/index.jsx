import { Link } from "wouter";
import React from 'react';
import Menu from '../../components/Menu';


const Home = () => {
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
                  title: 'Rollo',
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


    return (<>
        <h1>Merchos Place</h1>
        <div>
        <ul>
      {menuItems.map((item) => (
        <Menu key={item.id} title={item.title} subMenuItems={item.subMenuItems} />
      ))}
    </ul>
        </div>
        
        <div>
        
            <Link to="/map">Refugio no mapa</Link>
        </div>

    </>)
}



export default Home;