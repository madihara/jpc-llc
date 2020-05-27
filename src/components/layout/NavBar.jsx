import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Nav>
      <LogoBox>
        <Logo alt="JPC logo"/>
      </LogoBox>
      <Links>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/services/'>Services</StyledLink>
        <StyledLink to='/capabilities/'>Capabilities</StyledLink>
        <StyledLink to='/portfolio/'>Portfolio
        </StyledLink>
        <StyledLink to='/contact/'>Contact</StyledLink>
      </Links>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LogoBox = styled.div`
`
const Logo = styled.img``

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0 10px;

  :hover{
    color: red;
  }
`

export default NavBar