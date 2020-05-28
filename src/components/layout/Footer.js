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
          <StyledLink to='/contact'>Contact</StyledLink>
        </Column>
        <Column>
        <Logo src={logo} alt="jpc logo" />
        <div>
          
        </div>
        </Column>
        <Column>
          <Title>Contact</Title>
          <div>

          </div>
        </Column>
      </Main>
      <Copyright>Copyright &copy; {(new Date().getFullYear())} JPC, LLC</Copyright>
      <Copyright style={{padding: '0px'}}>Created by Madison Haradine</Copyright>
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
  align-items: center;
  padding: 3rem 0;
`
const Column = styled.section`
  display: flex;
  flex-direction: column;
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
