import React from 'react'
import styled from 'styled-components'

const MobileNav = () => {
  return (
    <MobileNavigation>
      I am the mobile nav
    </MobileNavigation>
  )
}

const MobileNavigation = styled.div`
  background: red;
  color: white;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`

export default MobileNav

