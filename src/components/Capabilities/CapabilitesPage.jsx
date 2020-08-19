import React, {useState} from 'react'
import styled from 'styled-components'

import * as palette from '../../variables/Variables'


const CapabilitesPage = () => {

  const capabilities = [
    'double lock stitching',
    'single lock stitching',
    'grommets',
    'long arm sewing',
    'bar trackers',
    'double axis cutting table'
  ]

  // const equipment = [
  //   'sewing machines',
  //   'large machine',
  //   'embroidering thing',
  //   'laser cutter'
  // ]

  const [active, setActive] =useState(capabilities[0])
  // const [equips, setEquip] = useState(equipment[0])

  return (
   <>
   <Hero><Title>Manufacturing Capabilities</Title>
  </Hero>
    <Container>
      <Column>
      {capabilities.map((item,index) => {
        return(
            <Tab 
              key={item}
              active={active === item}
              onClick={() => setActive(item)}>{item}</Tab>
        )
      })}
      </Column>
      <Column>
        <Info>
          <Heading> {active}</Heading>
          <p>This is some text that will explain what each thing does or is.</p>
          <p>Maybe there will be lists</p>
          <ul>
            
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
          <p>Equipment? Fabrics? Machinery? Anything you want people to know you have.  Anything potential customers might search for. Pictures included if wanted</p>
        </Info>
      </Column>
    </Container>
    {/* <Container style={{flexDirection: 'row-reverse'}}>
      <Column>
      {equipment.map((item,index) => {
        return(
            <Tab 
              key={item}
              equips={equips === item}
              onClick={() => setEquip(item)}>{item}</Tab>
        )
      })}
      </Column>
      <Column>
        <Info>
          <Heading style={{textAlign: 'left'}}> {equips}</Heading>
        </Info>
      </Column>
    </Container> */}
    </>
  )
}

const Hero = styled.div`
  color: white;
  opacity:0.8;
  background: #0a1128;
  text-align: center;
  height: 200px;
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
`

const Column = styled.div`
  display:flex;
  flex-direction: column;
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
const Info = styled.section`
  padding: 0 4rem;
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
`

export default CapabilitesPage

