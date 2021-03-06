import React from 'react'
import styled from 'styled-components'
import {Fade} from 'react-reveal'
import sewingmachine from '../../images/Sewing-Machine-PNG-File.png'


import * as palette from '../../variables/Variables'

const About = (props) => {
  return (
    <AboutContainer>
      <Fade left>
        <TextBox>
        <Title>
          Best in class commercial sewing and innovative solutions for your textile needs.
        </Title>
        <Paragraph>
        Beginning in 1984, JPC started as a small, family run business in Elkhart, Indiana. We manufactured and provided floor mats for the thriving van conversion industry for many years. In time, JPC grew larger and we expanded our resources and expertise to provide sewn textiles to a variety of industries around the world. We offer a large selection of equipment and unique materials as well as laser measurements and product prototyping to manufacture efficiently without compromising quality.
        </Paragraph>
        <Paragraph>
        Whether you're a large company looking to source high volume production or simply looking for a one off custom project we are here to help! We pride ourselves in our long history of providing our customers with top of the line products and services. Quality and consistency are our highest priorities and we strive to ensure client satisfaction with short lead times.
        </Paragraph>
      </TextBox>
      </Fade>
      <ImageBox>
        <Image src={sewingmachine} alt="sewing maching" />
      </ImageBox>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0 0;
  overflow-x: hidden;
`

const ImageBox = styled.div`
  width: 55%;

  @media screen and (max-width: 1160px) {
    width: 35%;
  }

  @media screen and (max-width: 950px){
    display: none;
  }
`

const Image = styled.img`
  width: 80vw;
  overflow: hidden;
  filter: grayscale(50%);
`

const TextBox= styled.div`
  width: 80%;
  padding: 0 0 0 6rem;

  @media screen and (max-width: 767px) {
    width: 85%;
    padding: 0 2rem;
  }
 
`
const Title = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  color: #000;
  font-size: 2.3rem;
  margin: 5rem 0 2rem;
  position: relative;
  line-height: 2.4rem;
  

  &:before {
    content:"";
    display: block;
    width: 120px;
    height: 4px;
    position: absolute;
    background: ${palette.SECONDARY_COLOR};
    top: -15px;
  }
`

const Paragraph = styled.p`
  padding: 0;
  font-family: sans-serif;
  font-size: 1.1rem;
`

export default About


