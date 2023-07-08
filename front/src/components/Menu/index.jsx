import React, { useState } from 'react';

const Menu = ({ title, subMenuItems }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <button onClick={toggleExpanded} aria-expanded={expanded}>
        {title}
      </button>
      {expanded && (
        <ul>
          {subMenuItems.length > 0 ? (
            subMenuItems.map((item) => (
            <Menu key={item.id} title={item.title} subMenuItems={item.subMenuItems} />
          ))
          ) : (
            <li>Static Submenu Text</li>
            )}
        </ul>
      )}
    </li>
  );
};

export default Menu;
