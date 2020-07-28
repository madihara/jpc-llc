import React from 'react'
import styled from 'styled-components'

import * as palette from '../../variables/Variables'

const CadInfo = () => {
  return (
    <Container>
      <Heading>
        Learn how our laser measurements guarantee a perfect fit everytime
      </Heading>
    </Container>
  )
}

const Container = styled.div`
  background: rgba(0,0,0,0.1);
  color: ${palette.MAIN_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h4`
  color: ${palette.SECONDARY_COLOR};
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 5rem;
  margin: 0 12rem;
  
`

export default CadInfo
