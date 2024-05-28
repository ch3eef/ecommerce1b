import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/bg-img-3.jpg"), center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 34px;
  font-weight: 300;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`


const Button = styled.button`
  width: 40%;
  bottom: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          
          <input
          type="text"
          id="username"
          className="form__field"
          placeholder="Usermail"
          style={{flex: 1,
            minWidth: "40%",
            margin: "10px 0px",
            padding: "10px"}}
        />
          <input
          type="password"
          id="password"
          className="form__field"
          placeholder="Password"
          style={{flex: 1,
            minWidth: "40%",
            margin: "10px 0px ",
            padding: "10px"}}
        />
          
        <Button>CREATE</Button>
        <Link>Forgot Password?</Link>
        <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register