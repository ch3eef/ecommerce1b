import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  z-index: 2;
  margin: auto;
  cursor: pointer;
  opacity: 0.7;

`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slides = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props=>props.pg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  /* width: 200px; */
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`font-size: 70px;`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
      }
    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 36L19 24l12-12"/></svg>
      </Arrow>
      <Wrapper slideIndex={slideIndex}> 
          {sliderItems.map(item=>(

          
        <Slides pg={item.pg} key={item.id}>
        <ImageContainer>
          <Image>
            <img src={item.img} />
          </Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slides>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12"/></svg>
      </Arrow>
    </Container>
  )
}
