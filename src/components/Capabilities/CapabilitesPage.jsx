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

  const equipment = [
    'sewing machines',
    'large machine',
    'embroidering thing',
    'laser cutter'
  ]

  const [active, setActive] =useState(capabilities[0])
  const [equips, setEquip] = useState(equipment[0])
  return (
   <>
    <Title>Manufacturing Capabilities</Title>
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
        </Info>
      </Column>
    </Container>
    <Title>Available Equipment</Title>
    <Container style={{flexDirection: 'row-reverse'}}>
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
    </Container>
    </>
  )
}

const Title= styled.h1`
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
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
`

export default CapabilitesPage

