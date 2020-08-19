import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {FiTruck, FiScissors, FiMonitor} from 'react-icons/fi'


import * as palette from '../../variables/Variables'


const DetailBox = ({props}) => {
  return (
   <Section>
    <Box>
      <Icon>
      <FiMonitor
      style={{ 
        fontSize: '80px',
        color: `${palette.SECONDARY_COLOR}`}}/></Icon>
      {/* <Image src={image1} alt="" /> */}
     <Title>3d CAD Technology</Title>
      <Info>Maecenas ac vestibulum est. Quisque ultricies sit amet eros eget porta. Ut ultricies at quam a efficitur. Sed blandit orci sit amet lorem porttitor, id feugiat turpis mollis. Proin maximus pellentesque nisl, sit amet facilisis ligula malesuada sed. Donec et augue eleifend nibh luctus euismod.</Info>
      <LearnMore to='/services'>Learn More &#62;</LearnMore>
    </Box>
    <Box>
      <Icon><FiTruck
      style={{ 
        fontSize: '80px',
        color: `${palette.SECONDARY_COLOR}`}}/></Icon>
      {/* <Image src={image2} alt="" /> */}
     <Title>Commercial Sewing</Title>
      <Info>Maecenas ac vestibulum est. Quisque ultricies sit amet eros eget porta. Ut ultricies at quam a efficitur. Sed blandit orci sit amet lorem porttitor, id feugiat turpis mollis. Proin maximus pellentesque nisl, sit amet facilisis ligula malesuada sed. Donec et augue eleifend nibh luctus euismod.</Info>
      <LearnMore to='/services'>Learn More &#62;</LearnMore>
    </Box>
    <Box>
      <Icon>
      <FiScissors
      style={{ 
        fontSize: '80px',
        color: `${palette.SECONDARY_COLOR}`}}/></Icon>
     {/* <Image src={image3} alt="" /> */}
     <Title>Custom Projects</Title>
      <Info>Maecenas ac vestibulum est. Quisque ultricies sit amet eros eget porta. Ut ultricies at quam a efficitur. Sed blandit orci sit amet lorem porttitor, id feugiat turpis mollis. Proin maximus pellentesque nisl, sit amet facilisis ligula malesuada sed. Donec et augue eleifend nibh luctus euismod.</Info>
      <LearnMore to='/services'>Learn More &#62;</LearnMore>
    </Box>
</Section>
  )
}
const Section = styled.div`
  display: flex;
  flex-basis: 25%;
  min-width: 300px;
  justify-content: center;
  padding: 0 6rem 2rem;
  margin: 2rem 0 0;
  flex-flow: wrap;
`

const Box = styled.div`
  /* border: 3px solid #ececec; */
  background: #ececec;
  margin: 4rem 2rem 0;
  min-width: 300px;
  max-width: 300px;
  transition: .7s;
  position: relative;
  padding: 8px 8px 20px;
  flex-grow: 1;

  
  
  /*filter: grayscale(100%);*/

  /* :hover{
    color: ${palette.SECONDARY_COLOR};
    border: 3px solid ${palette.SECONDARY_COLOR};
    opacity: 70%;
  } */
`
const Icon = styled.div`
  position: absolute;
  top: -44px;
  left: 40%;
`



const Title = styled.h3`
  font-weight: 600;
  margin: 45px 0 0;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding-left: 15px;
  text-align: center;
`

const Info = styled.p`
  color: black;
  padding: 0 15px;
`

const LearnMore = styled(Link)`
  font-weight: 600;
  margin: 0 0 6px;
  text-transform: uppercase;
  margin-left: 15px;
  color: ${palette.SECONDARY_COLOR};
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
 

  &:hover{
    cursor: pointer;
    border-bottom: 1px solid ${palette.MAIN_COLOR};
    transition: all ease-in-out 0.7s;
  }
`



export default DetailBox
