import React from 'react'
import styled from 'styled-components'
import LazyHero from 'react-lazy-hero'

const SharedHero = ({heading, image}) => {
  return (
    <StyledLazyHero 
      imageSrc={image}
      opacity="0.8"
      color="#0a1128"
      parallaxOffset="1"
      minHeight="40vh"
      isCentered={true}>
      <Heading>{heading}</Heading>
    </StyledLazyHero>
  )
}

const StyledLazyHero = styled(LazyHero)`

`
const Heading = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 3.4rem;
  letter-spacing: 3px;
  font-weight: normal;
`

export default SharedHero;
