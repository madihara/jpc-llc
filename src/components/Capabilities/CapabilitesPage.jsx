import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as palette from '../../variables/Variables'


const CapabilitesPage = () => {
  
  const capabilities = useStaticQuery(
    graphql`
      query{
        allContentfulCapabilitiesTabs{
          edges{
            node{
              name
              description{
                json
              }
            }
          }
        }
      }   
    `
  )

  const [active, setActive] = useState({name:'Fabrics', description:''});

  return (
   <div style={{height: '100%'}}>
    <Hero>
      <Title>Manufacturing Capabilities</Title>
    </Hero>
    <Container>
      <Column>
      {capabilities.allContentfulCapabilitiesTabs.edges.map((edge) => {
        return(
          <div>
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
             </Description>
          </div>
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
  min-height: 200%;
`

const Column = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
`
const Tab = styled.button`
  cursor: pointer;
  width: 250px;
  height: 50px;
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
`
const Description = styled.div`
  display:none;
  

  ${({active}) =>
    active &&
    `display: block;
    position: absolute;
    left: 475px;
    top: 478px;
    padding: 0 8rem 0 0;
    `
  }

    @media screen and (max-width: 1076px) {
      display: block;
      position: relative;
    }
  
`
const Info = styled.section`
  padding: 0 4rem;
  min-height: 630px;
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



export default CapabilitesPage

