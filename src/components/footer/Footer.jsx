import React from 'react'
import styled from "styled-components"

export default function Footer() {

  const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  background-color:black;
  
  `
  const Name = styled.div`
  color:white;
  font-weight:bold;
  padding-top:5px;

  `


  return (
    <div>
      <Container>
        <Name>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Zain Sattar 2020 </Name>
         
          <img src="https://blog.agood.cloud/img/common/github.png" alt="Github" width="4%" height="4%" />
          

      </Container>

    </div>
  )
}
