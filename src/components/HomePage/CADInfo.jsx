import React from 'react'
import styled from 'styled-components'

import * as palette from '../../variables/Variables'

const CadInfo = () => {
  return (
    <Container>
      <Heading>
        3D CAD some stuff from contentful
      </Heading>
    </Container>
  )
}

const Container = styled.div`
  background: rgba(0,0,0,0.2);
  color: ${palette.MAIN_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h4`
  color: ${palette.SECONDARY_COLOR};
  font-weight: 500;
`

export default CadInfo
