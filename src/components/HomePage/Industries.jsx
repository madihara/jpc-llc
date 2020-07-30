import React from 'react'
import styled from 'styled-components'
import {FaCarSide} from 'react-icons/fa'
import {IoIosAirplane, IoMdBoat} from 'react-icons/io'
import {RiTruckLine} from 'react-icons/ri'
import * as palette from '../../variables/Variables'

function Industries() {
  return (
    <IndustryBox>
      <Heading>Industries we serve</Heading>
      <Box>
      <Container>
        <FaCarSide 
        style={{
          fontSize: '100px'
        }}/>
        <Title>Automotive</Title>
      </Container>
      <Container>
        <IoIosAirplane 
        style={{
          fontSize: '100px'
        }}/>
        <Title>Airline</Title>
      </Container>
      <Container>
        <IoMdBoat 
        style={{
          fontSize: '100px'
        }}/>
        <Title>Marine</Title>
      </Container>
      <Container>
        <RiTruckLine
        style={{
          fontSize: '100px'
        }} />
        <Title>Transportation</Title>
      </Container>
      </Box>
    </IndustryBox>
  )
}

const IndustryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
`

const Heading = styled.h3`
  font-weight: normal;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-top: 4rem;
`

const Box = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  color: ${palette.SECONDARY_COLOR};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem;
  justify-content:center;
  align-items: center;
`

const Title = styled.h5`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  color: ${palette.MAIN_COLOR};
  font-weight: normal;
`

export default Industries
