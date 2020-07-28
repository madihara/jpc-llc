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
      <Title>3d CAD Technology</Title>
      <LearnMore>Learn More &#62;</LearnMore>
    </Box>
    <Box>
      <Image src={image2} alt="" />
      <Title>Commercial Sewing</Title>
      <LearnMore>Learn More &#62;</LearnMore>
    </Box>
    <Box>
     <Image src={image3} alt="" />
      <Title>Custom Projects</Title>
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
  max-height: 100%;
  flex-basis: 25%;
`

const Box = styled.div`
  border: 6px solid ${palette.SECONDARY_COLOR};
  margin: 1rem;
  width: 87%;
  min-width: 200px;
  transition: .7s;
  /*filter: grayscale(100%);*/

  :hover{
    color: ${palette.SECONDARY_COLOR};
    border: 6px solid ${palette.SECONDARY_COLOR};
    filter: grayscale(100%);
    opacity: 70%;
  }
`

const Image = styled.img`
  height: 160px;
  width: 100%;
  
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
