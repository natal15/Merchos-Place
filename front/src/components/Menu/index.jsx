import React, { useState } from 'react';
import Styled from './styles'

const Menu = ({ title, subMenuItems }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Styled.List>
      <Styled.Button onClick={toggleExpanded} aria-expanded={expanded}>
        {title}
      </Styled.Button>
      {expanded && (
        <Styled.Test>
          {subMenuItems.length > 0 ? (
            subMenuItems.map((item) => (
            <Menu key={item.id} title={item.title} subMenuItems={item.subMenuItems} />
          ))
          ) : (
            <Styled.List>Static Submenu Text</Styled.List>
            )}
        </Styled.Test>
      )}
    </Styled.List>
  );
};

export default Menu;
