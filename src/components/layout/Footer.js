import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import logo from '../../images/icons/jpc-logocir.png'

import * as palette from '../../variables/Variables'

const Footer = () => {

  return (
    <Foot>
      <Main>
        <Column>
          <Title>Navigation</Title>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/services'>Services</StyledLink>
          <StyledLink to='/capabilities'>Capabilities</StyledLink>
          <StyledLink to='/portfolio'>
            Portfolio
          </StyledLink>
          <StyledLink to="/aboutus">
            About Us
          </StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
          <Logo src={logo} alt="jpc logo" />
        </Column>
        <Column>
          <Title>
            Contact Us
          </Title>
          <p>574-555-555</p>
          <p>jpc@gmail.com</p>
        </Column>
        <Column>
          <Title>Location</Title>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.5882062293126!2d-86.020427!3d41.729404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791c9f05c7%3A0xae904854f4f3fc25!2sJPC%20LLC!5e0!3m2!1sen!2sus!4v1595958396512!5m2!1sen!2sus" width="500" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </Column>
      </Main>
      <Copyright>Copyright &copy; {(new Date().getFullYear())} JPC, LLC &nbsp;&nbsp;|  &nbsp;&nbsp;  Created by Madison Haradine</Copyright>

    </Foot>
  )
}

const Foot = styled.div`
  
  width: 100%;
  background: ${palette.MAIN_COLOR};
  color: white;
`

const Main = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 3rem 0;
`
const Column = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Title = styled.h1`
  text-transform: uppercase;
  padding: 2px 0 0;
  margin: 0 0 8px;
  border-bottom: 2px solid ${palette.SECONDARY_COLOR};
  font-size: 1.1rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration:none;
  text-transform: uppercase;
  padding: 1px 0;
  font-size: 0.9rem;


  :hover{
    color: ${palette.SECONDARY_COLOR}
  }
`

const Logo = styled.img`
  height: 100px;
  width: 130px;
  padding: 3rem 0;
  margin-left: -2rem;
`

const Copyright= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  font-size: 11px;
  padding: 8px 0 0;
`

export default Footer
