import React, { useState } from 'react';
import Styled from './styles';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Styled.TabContainer>
      <Styled.TabList>
        {tabs.map((tab, index) => (
          <Styled.TabButton
            key={index}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
            </Styled.TabButton>
        ))}
      </Styled.TabList>
      <Styled.TabContent>
        {tabs[activeTab].content}
      </Styled.TabContent>
    </Styled.TabContainer>
  );
};

export default Tab;
