import { styled } from "styled-components";

const Probe = styled.ul`
    list-style-type: none; 
    margin: 10px;
    padding: 0px;
`

const User = styled.section`
  position: absolute;
  top: 20px;
  right: 20px;

  p {
    margin: 0;
  }
`;

export default {
    Probe,
    User,
}