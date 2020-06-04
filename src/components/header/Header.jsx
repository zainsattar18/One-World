import React from 'react'
import World from "./World"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
background-color:black;
padding-top:2%;
padding-bottom:2%;
height:100px;

`

const Button = styled.button`
background:orange;
color:blue;
height:40px;
`;

const Word = styled.div`

font-size:100%;
color:white;
margin:20px;
font-weight:bold;
margin-left:0px;
margin-right:45px;
padding-top:17px;


`



export default function Header() {
  return (
    <Container>

      <World />

      <Word>One World</Word>

      <Link to="/" exact>
        <Button>Home </Button>
      </Link>
    </Container>
  )
}
