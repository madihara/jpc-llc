import React from 'react'
import styled from 'styled-components'
import {FaCarSide, FaMotorcycle, FaSnowplow} from 'react-icons/fa'
import {IoIosAirplane, IoMdBoat, IoIosSchool} from 'react-icons/io'
import {RiTruckLine} from 'react-icons/ri'
import {GiSpeedBoat, GiWeightLiftingUp, GiBarracksTent} from 'react-icons/gi'
import {Fade} from 'react-reveal'
import * as palette from '../../variables/Variables'

function Industries() {
  return (
    <IndustryBox>
      <Fade up>
      <Heading>Industries we serve</Heading>
      <Box>
      <Container>
        <FaCarSide 
        style={{
          fontSize: '50px'
        }}/>
        <Title>Automotive</Title>
      </Container>
      <Container>
        <IoIosAirplane 
        style={{
          fontSize: '50px'
        }}/>
        <Title>Airline</Title>
      </Container>
      <Container>
        <IoMdBoat 
        style={{
          fontSize: '50px'
        }}/>
        <Title>Marine and Boating</Title>
      </Container>
      <Container>
        <RiTruckLine
        style={{
          fontSize: '50px'
        }} />
        <Title>Trucking and RV</Title>
      </Container>
      <Container>
        <FaMotorcycle
        style={{
          fontSize: '50px'
        }} />
        <Title>Motorcycle</Title>
      </Container>
      <Container>
        <GiSpeedBoat
        style={{
          fontSize: '50px'
        }} />
        <Title>Personal Watercraft</Title>
      </Container>
      <Container>
        <IoIosSchool
        style={{
          fontSize: '50px'
        }} />
        <Title>Education</Title>
      </Container>
      <Container>
        <GiBarracksTent
        style={{
          fontSize: '50px'
        }} />
        <Title>Custom Enclosures</Title>
      </Container>
      <Container>
        <FaSnowplow
        style={{
          fontSize: '50px'
        }} />
        <Title>Industrial Equipment</Title>
      </Container>
      <Container>
        <GiWeightLiftingUp
        style={{
          fontSize: '50px'
        }} />
        <Title>Sporting Gear</Title>
      </Container>
      </Box>
      </Fade>
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
  padding: 0 6rem;
`

const Heading = styled.h3`
  font-weight: normal;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-top: 7rem;
`

const Box = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
