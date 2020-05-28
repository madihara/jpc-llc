import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../images/icons/jpc-logocir.png'

import {FaPhone, FaTools} from 'react-icons/fa'
import { MdPermMedia} from 'react-icons/md'
import {GiFactory} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'

import * as palette from '../../variables/Variables'

const NavBar = () => {
  return (
    <Nav>
      <LogoBox>
        <Logo src={logo} alt="JPC logo"/>
      </LogoBox>
      <Links>
        <Column>
          <AiOutlineHome 
            style={{ 
            fontSize: '40px'}}/>
          <StyledLink to='/'>Home</StyledLink>
        </Column>
        <Column>
          <FaTools 
          style={{ 
          fontSize: '40px'}}/>
          <StyledLink to='/services/'>Services</StyledLink>
        </Column>
        <Column>
          <GiFactory 
          style={{ 
          fontSize: '40px'}}/>
          <StyledLink to='/capabilities/'>Capabilities</StyledLink>
        </Column>
        <Column>
          <MdPermMedia 
          style={{ 
          fontSize: '40px'}}/>
          <StyledLink to='/portfolio/'>Portfolio
        </StyledLink>
        </Column>
        <Column>
          <FaPhone 
          style={{
          fontSize: '40px'}}/>
          <StyledLink to='/contact/'>Contact</StyledLink>
        </Column>
      </Links>
      <PhoneBox>
        <PhoneButton>+1(574)293-8030</PhoneButton>
      </PhoneBox>
    </Nav>
    
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  height: 125px;
  width: 100vw;
  background: ${palette.MAIN_COLOR}
`
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 130px;

`
const Logo = styled.img`
  height: 80px;
  width: 110px;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 15px 2.4rem -5px;
  font-size: 0.8rem;
  color: white;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  :hover{
    color: ${palette.SECONDARY_COLOR};
  }
`
const PhoneBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.3rem;
  padding-right: 3rem;
`
const PhoneButton = styled.button`
  border-radius: 50px;
  background: ${palette.SECONDARY_COLOR};
  color: white;
  border: none;
  padding: 13px 2rem;
  font-size: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;
`

export default NavBar