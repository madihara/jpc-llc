import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

import styles from './services.module.css'

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
              icon{
                id
                description
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
    <>
    <Heading>Our Services</Heading>
    <Container>
        {data.allContentfulFeatureCard.edges.map((edge, index) => {
          if (index % 2 === 0){
            return(
              <Row>
                <div>
                  <SubHeading>{edge.node.title}</SubHeading>
                  <Text>{edge.node.description.description}</Text>
                </div>
                <Image src={edge.node.icon.fluid.src}/>
              </Row>
            )
          } else {
            return(
              <Row>
                <Image src={edge.node.icon.fluid.src}/>
                <div>{edge.node.title}</div>
              </Row>
            )
          }
        })}
    </Container>
    </>
  )
}

const Heading = styled.h1`
  font-weight: normal;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`
const Row= styled.section`
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
`
const SubHeading = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`
const Text= styled.p`
  padding: 0;
  margin: 0;
`
const Image = styled.img`
  width: 35%;
  height: 50vh;

`

export default ServicesPage
