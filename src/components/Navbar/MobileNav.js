import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {AiOutlineMenu} from 'react-icons/ai'

import * as palette from '../../variables/Variables'

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen)

  return (
    <>
    <Button
      onClick={() => setOpen(!isOpen)}
    >
      <AiOutlineMenu/>
    </Button>

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

  /* transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')}; */
`
const Button = styled.button`
  display: block;
  position: fixed;
  top: 30px;
  right: 30px;
  color: white;
  background: ${palette.MAIN_COLOR};
  z-index: 2001;
  height: 60px;
  width: 60px;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  outline: none;

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

