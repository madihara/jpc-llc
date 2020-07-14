import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

import image1 from '../../images/grommets.jpg'
import image2 from '../../images/buckles.jpg'
import image3 from '../../images/velcro2.jpg'

import * as palette from '../../variables/Variables'


const DetailBox = ({props}) => {
  return (
   <Section>
    <Box>
      <Image src={image1} alt="" />
      <Title>3d CAD Measurements</Title>
      <LearnMore>Learn More &#62;</LearnMore>
    </Box>
    <Box>
      <Image src={image2} alt="" />
      <Title>Commercial Sewing</Title>
      <LearnMore>Learn More &#62;</LearnMore>
    </Box>
    <Box>
     <Image src={image3} alt="" />
      <Title>Other Services</Title>
      <LearnMore>Learn More &#62;</LearnMore>
    </Box>
</Section>
  )
}
const Section = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* justify-content: stretch; */
  /* align-items: center; */
`

const Box = styled.div`
  border: 3px solid #ececec;
  margin: 1rem;
  width: 90%;
  height: 250px;
  transition: .7s;

  :hover{
    border: 3px solid ${palette.SECONDARY_COLOR};
    color: ${palette.SECONDARY_COLOR};
  }
`

const Image = styled.img`
  height: 160px;
  width: 100%;
  filter: grayscale(100%);
  object-fit: cover;
`

const Title = styled.h3`
  font-weight: 600;
  margin: 10px 0 0;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding-left: 15px;
`

const LearnMore = styled.h5`
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  padding-left: 15px;
  color: ${palette.SECONDARY_COLOR};
  font-size: 1rem;
  letter-spacing: 1.5px;
`



export default DetailBox
