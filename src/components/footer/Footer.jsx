import React from 'react'
import styled from "styled-components"


export default function Footer() {

  const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  background-color:black;
  height:10%;
  
  `
  const Name = styled.div`
  color:white;
  font-weight:bold;
  padding-top:1%;
  padding-bottom:1%;
  padding-left:10px;
  font-size:15px;
  @media screen and (max-width: 450px){
    font-size:25%;
  }

  `

  const Thanks = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  color:#D3E2EB;
  font-size:15px;
  padding-top:1%;
  font-family: 'Dancing Script', cursive;
  @media screen and (max-width: 450px){
    font-size:35%
  }
  `

  return (
    <div>
      <Container>
        <Name>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Zain Sattar 2020 </Name>
        <Thanks>Special Thanks to CountryApi
        {/* <img src="https://imgur.com/MGEKTOf" alt="CountryApi"/> */}
         </Thanks>
          <img src="https://blog.agood.cloud/img/common/github.png" alt="Github" width="4%" height="4%" />
          

      </Container>

    </div>
  )
}
