import React from 'react'
import styled from 'styled-components'
import {Fade} from 'react-reveal'
import sewingmachine from '../../images/Sewing-Machine-PNG-File.png'


import * as palette from '../../variables/Variables'

const About = (props) => {
  return (
    <AboutContainer>
      <Fade right>
        <TextBox>
        <Title>
          Best in class commercial sewing and innovative solutions for your textile needs.
        </Title>
        <Paragraph>
        Beginning in 1984, JPC started as a small, family run business in Elkhart, Indiana. We manufactured and provided floor mats for the thriving van conversion industry for many years. In time, JPC grew larger and we expanded our resources and expertise to provide sewn textiles to a variety of industries around the world.
        </Paragraph>
        <Paragraph>
        If you have any fabric production needs, we are here to help! We pride ourselves in our long history of providing our customers with top of the line products and services. Quality and consistency are our highest priorities and we strive to ensure client satisfaction with short lead times.
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
  margin: 4rem 0;
`

const ImageBox = styled.div`
  width: 55%;
  /* background: ${palette.MAIN_COLOR}; */
`

const Image = styled.img`
  width: 80vw;
  overflow: hidden;
  filter: grayscale(50%);
`

const TextBox= styled.div`
  width: 80%;
  padding: 0 0 0 6rem;
 
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


