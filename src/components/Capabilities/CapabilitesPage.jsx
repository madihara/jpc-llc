import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as palette from '../../variables/Variables'


const CapabilitesPage = () => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <Image alt={alt} src={url} />
      },
    },
  }
  
  const capabilities = useStaticQuery(
    graphql`
      query{
        allContentfulCapabilitiesTabs{
          edges{
            node{
              name
              image{
                fluid{
                  src
                }
              }
              description{
                json
              }
            }
          }
        }
      } 
    `
  )

  const [active, setActive] = useState({name:'Fabrics', description: {}});



  return (
   <div style={{height: '100%'}}>
    <Hero>
      <Title>Manufacturing Capabilities</Title>
    </Hero>
    <Container>
      <Column>
        
      {capabilities.allContentfulCapabilitiesTabs.edges.map((edge,index) => {
        return(
          <>
            <Tab 
              key={edge.node.name}
              active={active.name === edge.node.name}
              onClick={() => setActive({
                name: `${edge.node.name}`,
                description: `${documentToReactComponents(edge.node.description.json)}`
              })}
             >{edge.node.name}</Tab>
            
         
             <Description
             active={active.name === edge.node.name}> 
                {documentToReactComponents(edge.node.description.json)}
                {edge.node.image ? <Image src={edge.node.image.fluid.src} /> : null}
             </Description>
  
          
         </>
        )
      })}
      </Column>
      <Column>
        <Info>
          <Heading> {active.name}</Heading>
        </Info>
      </Column>
    </Container>
    </div>
  )
}

const Hero = styled.div`
  color: white;
  opacity:0.8;
  background: #0a1128;
  text-align: center;
  height: 275px;
  padding-top: 115px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title= styled.h3`
  text-align: center;
  font-weight: normal;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem 10rem;
  height: 150vh;
  /* flex-flow: wrap;
  flex-direction: row-reverse; */


  @media screen and (max-width: 1076px){
    padding: 3rem 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`

const Column = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;


  @media screen and (max-width: 1076px){
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
  }
`

const Tab = styled.button`
  cursor: pointer;
  width: 250px;
  height: 60px;
  border-left: none;
  border-right: none;
  border-top: 1px solid black;
  border-bottom: 1px solid white;
  text-transform: capitalize;
  background: ${palette.MAIN_COLOR};
  color: white;
  transition: .7s;
  outline: none;


  ${({ active }) =>
    active &&
    `
    background: ${palette.SECONDARY_COLOR};
    opacity: 1;
  `}
  ${({equips}) =>
    equips &&
    `
    background: ${palette.SECONDARY_COLOR};
    `
} 

  @media screen and (max-width: 1076px){
    width: 190px;
    margin: 2px;
  }

  @media screen and (max-width: 448px) {
    width: auto;
  }
`
const Description = styled.div`
  display:none;
  height: 100%;

  

  ${({active}) =>
    active &&
    `display: block;
    position: absolute;
    left: 475px;
    top: 478px;
    padding: 0 8rem 0 0;
    height: 100%;
  
    `
  }

    @media screen and (max-width: 1076px) {
      display: none;
      position: absolute;

      ${({active}) => 
      active &&
      `display: block;
        position: absolute;
        top: 600px;
        left: 100px;
        padding: 10px;
        `
    }
    }

    @media screen and (max-width: 378px) {
      ${({active}) => 
      active &&
      `display: block;
        position: absolute;
        top: 660px;
        left: 30px;
        overflow: scroll;
        `
    }
    }
  
`
const Info = styled.section`
  padding: 0 4rem;
  height: 100%;
`

const Heading = styled.h5`
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  position: relative;

  &:after{
    content:'';
    display: block;
    position: absolute;
    background: ${palette.SECONDARY_COLOR};
    width: 125px;
    height: 4px;
    bottom: --20px;
  }

  @media screen and (max-width: 1076px){
    display:none;
  }`

const Image = styled.img`
  max-height: 400px;
  object-fit: cover;
  margin: 2px;

  @media screen and (max-width: 1076px){
    display: none
  }
`




export default CapabilitesPage

