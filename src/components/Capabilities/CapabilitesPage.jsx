import React, {useState} from 'react'
import styled from 'styled-components'


const CapabilitesPage = () => {

  const arr = [
    'double lock stitching',
    'single lock stitching',
    'grommets',
    'long arm sewing',
    'bar trackers',
    'double axis cutting table'
  ]

  const [active, setActive] =useState(arr[0])
  return (
   <>
    <Title>Manufacturing Capabilities</Title>
    <Container>
      <Column>
      {arr.map((item,index) => {
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
  border-bottom: 1px solid black;
  text-transform: capitalize;


  ${({ active }) =>
    active &&
    `
    background; red;
    opacity: 1;
  `}
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

