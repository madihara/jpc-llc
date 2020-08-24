import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { FaTools,FaPhone} from 'react-icons/fa'
import { MdPermMedia} from 'react-icons/md'
import {GiFactory} from 'react-icons/gi'
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai'

import logo from '../../images/icons/jpc-logocir.png'
import * as palette from '../../variables/Variables'


const NavBar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos, wait }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll],
      false,
      false,
      300
  )


  return (
    <>
    <Nav show={hideOnScroll}>
      <LogoBox>
        <Logo src={logo} alt="JPC logo"/>
      </LogoBox>
      <Links>
          <StyledLink 
          // active={active == 'home'}
          // onClick={() => setActive('home')}
          to='/'
          >
            <AiOutlineHome
              style={{ 
              fontSize: '24px'}}/>
            <LinkTitle>Home</LinkTitle>
          </StyledLink>
          <StyledLink 
          // active={active == 'services'}
          // onClick={() => setActive('services')}
          to='/services/'
          >
            <FaTools 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Services</h5>
          </StyledLink>
          <StyledLink 
          // active={active === 'capabilities'}
          // onClick={() => setActive('capabilities')}
          to='/capabilities/'
          >
            <GiFactory 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Capabilities</h5>
          </StyledLink>
          <StyledLink 
          // active={active === 'portfolio'}
          // onClick={() => setActive('home')}
          to='/portfolio/'
          >
            <MdPermMedia 
            style={{ 
            fontSize: '24px'}}/>
            <h5>Portfolio</h5>
           </StyledLink>
           <StyledLink 
          //  active={active === 'about'}
          //  onClick={() => setActive('about')}
           to='/aboutus/'
           >
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
  background: ${palette.MAIN_COLOR};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};

  @media screen and (max-width: 730px) {
    display: none;
  }
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
const LinkTitle= styled.h5`

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

  @media screen and (max-width: 900px) {
    margin: 15px 0.8rem -5px;
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

  @media screen and (max-width: 900px) {
    display: none;
    color: red;
  }
  
`

export default NavBar