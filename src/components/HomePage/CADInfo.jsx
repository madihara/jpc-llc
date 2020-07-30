import React from 'react'
import styled from 'styled-components'

import * as palette from '../../variables/Variables'

import image1 from './images/image.jpg'

const CadInfo = () => {
  let arr = [1,2,3,4]



  return (
    <Container>
      <ImageBox>
        <Image src={image1} alt="" />
      </ImageBox>
      <TextBox>
      <Heading>
        Some of our Quality work
      </Heading>
      <SubHeading>
        Here are a few of the products we can produce in small quanitites or large-volume orders.
      </SubHeading>
      <Button>
        See Full Gallery
      </Button>
      </TextBox>
      <ScrollBox>
        {arr.map((item, index) => {
          return(
            <Slide key={index}>
              {item}
            </Slide>
          )
        })}
      </ScrollBox>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${palette.MAIN_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 5rem 3rem 3rem;
  position: relative;
`
const TextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
 
`
const ImageBox= styled.div`
  width: 40vw;
  padding-bottom: 100px;
`
const Image = styled.img`
  height: 450px;
  filter: grayscale(100%);

`
const Heading = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0;
  /* margin: 7rem 7rem -1rem 0; */
  position: relative;
  text-align: right;

  &:before {
    content:"";
    display: block;
    position: absolute;
    height: 4px;
    width: 120px;
    background: white;
    right:0;
    top: -15px;
  }
`
const SubHeading = styled.p`
  text-align: right;
  color: white; 
  margin-top: -28px;
  padding-left: 6rem;
  font-family: sans-serif;
  font-size:1.1rem;
`
const Button = styled.button`
  margin-left: auto;
  background: ${palette.SECONDARY_COLOR};
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  color: white;
  font-size: 1.1rem;
  margin-top: 10px;
  transition: 0.7s;

  &:hover {
    color: ${palette.MAIN_COLOR};
    background: white;
    cursor: pointer;
  }
`
const ScrollBox = styled.div`
  width: 800px;
  height: 300px;
  color: white;
  position: absolute;
  left: 20%;
  top: 45%;
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Slide = styled.div`
  width: 200px;
  color: blue;
  border: 2px solid white;
`

export default CadInfo
