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
      minHeight="45vh"
      isCentered={true}>
      <Heading>{heading}</Heading>
    </StyledLazyHero>
  )
}

const StyledLazyHero = styled(LazyHero)`

`
const Heading = styled.h2`
  color: white;
`

export default SharedHero;
