import React from 'react'
import styled, {css} from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import {Fade} from 'react-reveal'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as palette from '../../variables/Variables'

const ServicesInfo = () => {
  
  const data = useStaticQuery(
    graphql`
      query{
        allContentfulFeatureCard {
          edges {
            node {
              title
              information{
                json
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
                 <Text> {documentToReactComponents(edge.node.information.json)}</Text>
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
                    textAlign:'left'
                    }}>{edge.node.title}</SubHeading>
                    </Fade>
                  <Text style={{textAlign: 'left'}}>
                    {documentToReactComponents(edge.node.information.json)}
                  </Text>
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
  flex-direction: column-reverse;
`
const Row= styled.section`
  display: flex;
  justify-content: center;
  margin: 4rem 6rem;
  /* background: red; */

  @media screen and (max-width: 600px){
    margin: 1rem 0;
  }
`
const ColoredBox=styled.div`
`
const SubHeading = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2.3rem;
  position: relative;
  padding: 0 3rem;
  
  @media screen and (max-width: 600px){
    padding: 0 1rem;
  }
  


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
  padding: 0 3rem;
  font-size: .9rem;

  @media screen and (max-width:600px){
    padding: 0 1rem;
  }
`
const Image = styled.img`
  width: 45%;
  height: 50vh;
  filter: grayscale(100);
  object-fit: fill;

  @media screen and (max-width: 1040px){
    display: none;
  }
`

// css`
//   .left{
//     color: purple;
//     background: red;
//   }

//   .right{
    
//   }
// `

export default ServicesInfo
