import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import sewingmachine from '../../images/Sewing-Machine-PNG-File.png'

import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import * as palette from '../../variables/Variables'

const About = (props) => {
  return (
    <AboutContainer>
      <ImageBox>
        <Image src={sewingmachine} alt="sewing maching" />
      </ImageBox>
      <TextBox>
        <Title>
          About Us
        </Title>
        <SubTitle>
          JPC HAS BEEN SEWING QUALITY TEXTILES FOR OVER 28 YEARS.
        </SubTitle>
        <Paragraph>
        Beginning in 1984, JPC started as a small, family run business in Elkhart, Indiana. We manufactured and provided floor mats for the thriving van conversion industry for many years. In time, JPC grew larger and we expanded our resources and expertise to provide sewn textiles to a variety of industries around the world.
        </Paragraph>
        <Paragraph>
        At JPC we offer best in class commercial sewing and innovative solutions for our customers. If you have any fabric production needs, we are here to help! We pride ourselves in our long history of providing our customers with top of the line products and services. Quality and consistency are our highest priorities and we strive to ensure client satisfaction with short lead times.
        </Paragraph>
        <Paragraph>
        We are also happy to now offer ___ with top of the line 3D CAD scanning capabilities, ensuring our measurements will be precise and fit perfectly. ADD A BIT MORE
        </Paragraph>
      </TextBox>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 3rem 0; */
`

const ImageBox = styled.div`
  width: 40%;
`

const Image = styled.img`
  transform: scaleX(-1);
  margin-left: -450px;
  height: 600px;
  filter: grayscale(100%);
`

const TextBox= styled.div`
  width: 60%;
  padding: 2rem 4rem;
  /* text-align: right; */
  background: ${palette.MAIN_COLOR};
`
const Title = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  color: ${palette.SECONDARY_COLOR};
  font-size: 8rem;
  margin: 0;
`

const SubTitle = styled.h5`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2rem;
  padding-right: 6rem;
  margin-top: -4.5rem;
  margin-bottom: 0;
  color: white;
`
const Paragraph = styled.p`
  /* text-align: left; */
  color: white;
`

export default About


