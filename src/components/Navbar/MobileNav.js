import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {AiOutlineMenu} from 'react-icons/ai'

import logo from '../../images/icons/jpc-logocir.png'

import * as palette from '../../variables/Variables'

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen)

  return (
    <>
    <LogoButtonBar>
      <Logo src={logo}/>
      <Button
        onClick={() => setOpen(!isOpen)}
      >
        <AiOutlineMenu style={{color: '#212890' }}/>
      </Button>
    </LogoButtonBar>
    {isOpen ? 
    <MobileNavigation>
      
      <LinksContainer>
        <StyledLink to='/'>
          Home
        </StyledLink>
        <StyledLink to='/services'>
          Services
        </StyledLink>
        <StyledLink to='/capabilities'>
          Capabilities
        </StyledLink>
        <StyledLink to='/portfolio'>
          Portfolio
        </StyledLink>
        <StyledLink to='/aboutus'>
          About Us
        </StyledLink>
        <StyledLink to='/contact'>
          Contact Us
        </StyledLink>
      </LinksContainer>
    </MobileNavigation>
     : null } 
    </>
  )
}

const MobileNavigation = styled.nav`
  
  background: ${palette.MAIN_COLOR};
  color: white;
  display: block;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2000;
`
const LogoButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left:0;
  width: 100vw;
`
const Logo = styled.img`
  height: 60px;
  width: 80px;
  z-index: 2001;
  margin: 20px 0 0 20px;
`
const Button = styled.button`
  display: block;
  position: fixed;
  top: 25px;
  right: 20px;
  color: ${palette.SECONDARY_COLOR};
  background: white;
  z-index: 2001;
  height: 60px;
  width: 60px;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 2px #848484;

`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  height: 30px;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: 20px 0;
`

export default MobileNav

