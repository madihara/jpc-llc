import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import * as palette from '../../variables/Variables'

const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Services',
    to: '/services'
  },
  {
    name: 'Capabilities',
    to: '/capabilities'
  },
  {
    name: 'Portfolio',
    to: 'portfolio'
  },
  {
    name: 'About Us',
    to: '/aboutus'
  },
  {
    name: 'Contact',
    to: '/contact'
  }
] 

const SimpleNav = () => {

  return (
    <Container>
      <div>logo</div>
      <div>
      {links.map((link, index) => {
        return <StyledLink to={link.to}>{link.name}</StyledLink>
      })}
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  background: ${palette.MAIN_COLOR};
  color: white;
  position: absolute;
  display: block;
  top:0;
  z-index: 3;
  width: 98%;
  margin: 0 8px;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration:none;
  color: white;
  text-transform: uppercase;
  margin: 0 1.5rem;

`

export default SimpleNav
