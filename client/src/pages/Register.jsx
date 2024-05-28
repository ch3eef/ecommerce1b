import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/bg-img-1.jpg"), center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.div`
  font-size: 34px;
  font-weight: 300;
`

const Aggreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  bottom: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <input
          type="text"
          id="name"
          className="form__field"
          placeholder="Name"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
          <input
          type="text"
          id="lastName"
          className="form__field"
          placeholder="Last Name"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
          <input
          type="text"
          id="username"
          className="form__field"
          placeholder="Username"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
          <input
          type="email"
          id="email"
          className="form__field"
          placeholder="Email"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
          <input
          type="password"
          id="password"
          className="form__field"
          placeholder="Password"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
          <input
          type="password"
          id="confirmPassword"
          className="form__field"
          placeholder="Confirm Password"
          style={{flex: 1,
            minWidth: "40%",
            margin: "20px 10px 0px 0px",
            padding: "10px"}}
        />
        <Aggreement>Lorem ipsum  inventore voluptas exercitationem, Doloremque porro magnam veniam alias fugit <b>Privacy Policy</b></Aggreement>
        <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register