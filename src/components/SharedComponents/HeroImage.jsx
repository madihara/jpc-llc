import React from 'react'
import styled from 'styled-components'

const HeroImage = ({title}) => {
  return (
    <HeroWrapper>
      <TextWrapper>
        
      </TextWrapper> 
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default HeroImage;

