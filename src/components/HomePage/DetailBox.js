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
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  min-width: 300px;
`

const Box = styled.div`
  border: 3px solid #ececec};
  margin: 1rem;
  width: 87%;
  min-width: 200px;
  transition: .7s;
  /*filter: grayscale(100%);*/

  :hover{
    color: ${palette.SECONDARY_COLOR};
    border: 3px solid ${palette.SECONDARY_COLOR};
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
  margin: 0 0 6px;
  text-transform: uppercase;
  padding-left: 15px;
  color: ${palette.SECONDARY_COLOR};
  font-size: 0.8rem;
  letter-spacing: 1.5px;
`



export default DetailBox
