import React from 'react'
import styled from 'styled-components'
import {Link, graphql, useStaticQuery} from 'gatsby'

import {FiTruck, FiScissors, FiMonitor} from 'react-icons/fi'


import * as palette from '../../variables/Variables'


const DetailBox = ({props}) => {
  const data = useStaticQuery(
    graphql`
      query{
        allContentfulFeatureCard{
          edges{
            node{
              title
            }
          }
        }
      }
    `
  )

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
      <Info>We have the capability to take precise laser measurements of any projects quickly and effectively.  We use Rhino computer-aided design to prototype and reverse engineer accurate solutions for all of your sewing needs.  Married with MPanel Software we can model 3D and 2D patterns for tension fabric structures created for the marine fabric industry.</Info>
      <LearnMore to='/services'>Learn More &#62;</LearnMore>
    </Box>
    <Box>
      <Icon><FiTruck
      style={{ 
        fontSize: '80px',
        color: `${palette.SECONDARY_COLOR}`}}/></Icon>
      {/* <Image src={image2} alt="" /> */}
     <Title>Commercial Sewing</Title>
      <Info>Over the years our facility has expanded and increased our ability to produce large production quantities with short lead times for our customers.  We have been serving the leading global companies for years and pride ourselves on strong, high quality materials while focusing on quick and consistent production. </Info>
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
      <Info>Have a project in mind but don't know where to start? Using our laser measurement technology and computer-aided design softwares we can have a product model available quickly.  We do one off designs or can produce larger quantities to fit your needs. </Info>
      <Info>If you have a project you want to get started, contact us today!</Info>
      <LearnMore to='/services'>Learn More &#62;</LearnMore>
    </Box>
</Section>
  )
}
const Section = styled.div`
  display: flex;
  min-width: 300px;
  justify-content: center;
  padding: 3rem 4rem 2rem;
  margin: 2rem 0 0;
  flex-flow: wrap;

  @media screen and (max-width: 590px){
    padding: 3rem 1rem;
  }
`

const Box = styled.div`
  background: #ececec;
  margin: 3rem 2rem 0;
  width: 300px;
  transition: .7s;
  position: relative;
  padding: 8px 8px 20px;
  flex-grow: 1;
  flex-shrink: 1;
  
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
  margin:  6px 0;
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
