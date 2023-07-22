import { styled } from "styled-components";

const List = styled.li`
    list-style-type: none; 
    margin: 10px;
    
    
`
const Button = styled.button`
    background-color: white;
    color: #1d1d1d;
    border: 0px solid #094293;
    width: 100%;
    text-align: left;
    font-size: 15px;
    border-radius: 10px
    font-family: sans-serif;
    font-weight: bold;
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

