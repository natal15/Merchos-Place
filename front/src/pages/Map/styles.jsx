import { styled } from "styled-components";

const StyledH1 = styled.h1`
  font-size: 3rem;
  color: #2f4f4f;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 50px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border: 3px solid #4682b4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const CuteDiv = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px; 
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
  margin: 0 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: #ffcc00;
    transform: rotate(45deg);
    border-radius: 50%;
    z-index: -1; 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: #ffcc00;
    transform: rotate(45deg);
    border-radius: 50%;
    z-index: -1; 
  }
`;

const User = styled.section`
  position: absolute;
  top: 20px;
  right: 20px;

  p {
    margin: 0;
  }
`;

const DoggyTitle = styled.h3`
  display: grid;
  place-items: center;
  font-family: 'Montserrat', sans-serif;
  color: #3498db;

`

const DoggyText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #3498db;
  font-size: 18px;

`
const Section = styled.section`
  display: grid;
  place-items: center;
  grid-gap: 10px;
`






export default {
  StyledH1,
  User,
  CuteDiv,
  DoggyTitle,
  DoggyText,
  Section,
}