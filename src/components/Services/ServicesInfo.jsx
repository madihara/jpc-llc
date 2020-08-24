import React from 'react'
import styled, {css} from 'styled-components'
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
                  <SubHeading className="left">{edge.node.title}</SubHeading>
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
                  <SubHeading className="left" style={{
                    textAlign:'right'
                    }}>{edge.node.title}</SubHeading>
                    </Fade>
                  <Text style={{textAlign: 'right'}}>{edge.node.description.description}</Text>
                </ColoredBox>
              </Row>
            )
          }
        })}
    </Container>
    </div>
  )
}

css`
  .left{

  }

  .right{
    
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`
const Row= styled.section`
  display: flex;
  justify-content: center;
  margin: 4rem 6rem;
  /* background: red; */
`
const ColoredBox=styled.div`
`
const SubHeading = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2.3rem;
  position: relative;
  padding: 0 3rem;
  


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
  padding: 0 3rem;
`
const Image = styled.img`
  width: 45%;
  height: 50vh;
  filter: grayscale(100);
  object-fit: fill;
`

export default ServicesInfo
