import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get timely updates about your favourite products</Desc>
      <InputContainer>
       <input
        type="email"
        id="email"
        className="form__field"
        placeholder="Your Email"
        style={{flex: 8, paddingLeft: '20px', border: 'none'}}
       />
        
        
        <Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M.292 1.665L24.002 12L.293 22.336L3.94 12L.292 1.665ZM5.708 13l-2 5.665L18.999 12L3.708 5.336l2 5.664H11v2H5.708Z"/></svg>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
