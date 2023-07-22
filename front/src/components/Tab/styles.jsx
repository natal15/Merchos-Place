import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const TabList = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => (props.active ? '#333' : '#ccc')};
  color: ${props => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const TabContent = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 4px;
`;

export default {
    TabContainer,
    TabList,
    TabButton,
    TabContent,
}