import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import * as palette from '../../variables/Variables'

import logo from '../../images/icons/jpc-logocir.png'

const SimpleNav = () => {
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

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
      setScroll(true);
    }
  }

  return (
    <NavBar scroll={scroll ===true} onScroll={handleScroll}>
      <FlexBox>
        <div>
        <Logo src={logo} alt="logo" />
        </div>
        <Nav>
          {links.map((link) => {
            return(
              <StyledLink to={link.to}>{link.name}</StyledLink>
            )
          }
          )}
        </Nav>
      </FlexBox>
    </NavBar>
  )
}

const NavBar = styled.div`
  position: absolute;
  background: transparent;
  z-index: 30;
  top: 10;
  width: 95%;
  padding: 1rem 0;
  margin: 0 3rem;

  ${({ scroll }) =>
    scroll &&
    `
    background: ${palette.SECONDARY_COLOR};
    color
  `}
`
const FlexBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`
const Logo = styled.img`
  width: 50px;
  height: 40px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: right;
  align-items: center;
  font-size: 0.8rem;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 20px;
  text-transform: uppercase;
  transition: .7s;

  &:hover{
    color: red;
  }
`


export default SimpleNav;