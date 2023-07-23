import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 252px;

  > * {
    font-size: 18px;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  height: 10px;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #3498db;
`;

const Error = styled.p`
  margin: 0;
  color: red;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default {
  Wrapper,
  Input,
  Error,
  Label,
};
