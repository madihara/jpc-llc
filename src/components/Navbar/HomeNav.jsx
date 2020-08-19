import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../images/icons/jpc-logocir.png'

import { FaTools,FaPhone} from 'react-icons/fa'
import { MdPermMedia} from 'react-icons/md'
import {GiFactory} from 'react-icons/gi'
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai'


import * as palette from '../../variables/Variables'


const NavBar = () => {


  return (
    <>
    <Nav>
      <LogoBox>
        <Logo src={logo} alt="JPC logo"/>
      </LogoBox>
      <Links>
          <StyledLink to='/'>
            <AiOutlineHome 
              style={{ 
              fontSize: '24px'}}/>
            <h5>Home</h5>
          </StyledLink>
          <StyledLink to='/services/'>
            <FaTools 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Services</h5>
          </StyledLink>
          <StyledLink to='/capabilities/'>
            <GiFactory 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Capabilities</h5>
          </StyledLink>
          <StyledLink to='/portfolio/'>
            <MdPermMedia 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Portfolio</h5>
           </StyledLink>
           <StyledLink to='/aboutus/'>
             <AiOutlineInfoCircle
              style={{
                fontSize:'24px',
                
              }}/>
             <h5>About Us</h5>
           </StyledLink>
          <StyledLink to='/contact/'>
            <FaPhone 
            style={{
            fontSize: '24px'}}/>
            <h5>Contact</h5></StyledLink>
      </Links>
      <PhoneBox to='/contact'>
        Free Quote
      </PhoneBox>
    </Nav>
    </>
  )
}



const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  height: 115px;
  width: 100vw;
  background: ${palette.MAIN_COLOR}
`
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding-left: 30px;

`
const Logo = styled.img`
  height: 75px;
  width: 90px;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px 1.5rem -5px;
  font-size: 0.9rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .7s;

  :hover{
    color: ${palette.SECONDARY_COLOR};
  }

  h5{
    font-weight: 300;
  }
`

const PhoneBox = styled(Link)`
  display: flex;
  height: 50%;
  color: white;
  background: ${palette.SECONDARY_COLOR};
  font-size: 1rem;
  width: 200px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-decoration: none;
  margin: 0 4rem 0 0;

  &:hover{
    background: white;
    cursor: pointer;
    transition: 0.7s;
    color: ${palette.MAIN_COLOR};
  }
  
`

export default NavBar