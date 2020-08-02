import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import {Fade} from 'react-reveal'
import SharedHero from '../SharedComponents/SharedHero'
import * as palette from '../../variables/Variables'

import heroimg from './images/herojpc2.jpg'

const ServicesPage = () => {
  
  const data = useStaticQuery(
    graphql`
      query{
        allContentfulFeatureCard {
          edges {
            node {
              title
              description{
                description
              }
              information{
                information
              } 
              icon{
                fluid{
                  src
                }
              }
            }
          }
        }
      }
    `
    )
    
  
  
  return (
    <div>
    <SharedHero heading='Our Services' image={heroimg} />
   
    
    <Container>
        {data.allContentfulFeatureCard.edges.map((edge, index) => {
          if (index % 2 === 0){
            return(
              <Row>
                <Fade left>
                <div style={{padding: '2rem'}}>
                  <SubHeading>{edge.node.title}</SubHeading>
                  <Text>{edge.node.description.description}</Text>
                  <Text>{edge.node.information.information}</Text>
                </div>
                </Fade>
                <Image src={edge.node.icon.fluid.src}/>
              </Row>
            )
          } else {
            return(
              <Row>
                <Image src={edge.node.icon.fluid.src}/>
                <Fade right>
                <div style={{padding: '2rem'}}>
                  <SubHeading style={{textAlign:'right'}}>{edge.node.title}</SubHeading>
                  <Text style={{textAlign: 'right'}}>{edge.node.description.description}</Text>
                </div>
                </Fade>
              </Row>
            )
          }
        })}
    </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`
const Row= styled.section`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 80vw;
`
const SubHeading = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-size: 2.3rem;
  position: relative;


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
const Text= styled.p`
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`
const Image = styled.img`
  width: 45%;
  height: 60vh;
`

export default ServicesPage
