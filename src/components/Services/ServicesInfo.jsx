import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import {Fade} from 'react-reveal'
import * as palette from '../../variables/Variables'

const ServicesInfo = () => {
  
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
   
    
    <Container>
        {data.allContentfulFeatureCard.edges.map((edge, index) => {
          if (index % 2 === 0){
            return(
              <Row>
                <ColoredBox>
                <Fade left>
                  <SubHeading>{edge.node.title}</SubHeading>
                  </Fade>
                  <Text>{edge.node.description.description}</Text>
                </ColoredBox>
                <Image src={edge.node.icon.fluid.src}/>
              </Row>
            )
          } else {
            return(
              <Row>
                <Image src={edge.node.icon.fluid.src}/>
               
                <ColoredBox>
                <Fade right>
                  <SubHeading style={{
                    textAlign:'left'
                    }}>{edge.node.title}</SubHeading>
                    </Fade>
                  <Text style={{textAlign: 'left'}}>{edge.node.description.description}</Text>
                </ColoredBox>
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
  flex-direction: column;
`
const Row= styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem 6rem;
  /* background: red; */
`
const ColoredBox=styled.div`
  padding: 3rem;
`
const SubHeading = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
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
  font-family: sans-serif;
`
const Image = styled.img`
  width: 45%;
  height: 60vh;
`

export default ServicesInfo
