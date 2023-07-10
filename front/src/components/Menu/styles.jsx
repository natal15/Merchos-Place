import { styled } from "styled-components";

const List = styled.li`
    list-style-type: none; 
    margin: 10px;
    font-family: fantasy;
    font-weight: bold;
    
`
const Button = styled.button`
    background-color: white;
    color: #1d1d1d;
    border: 1px solid #094293;
    width: 100%;
    text-align: left;
    font-size: 16px;
    border-radius: 8px
`
const Test = styled.ul`
    list-style-type: none; 
    margin: 10px;
    padding: 0px;
`


export default {
    List,
    Button,
    Test,
}

