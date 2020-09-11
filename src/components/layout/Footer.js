import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'


import logo from '../../images/icons/jpc-logocir.png'

import * as palette from '../../variables/Variables'

const Footer = () => {

  const data = useStaticQuery(graphql`
  query{
site{
  siteMetadata{
    title
    author
    business{
      name
      streetAddress
      cityAddress
      phone
      email
    }
  }
}
}
`)

const { phone, email } = data.site.siteMetadata.business

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
          
        </Column>
        <ColumnMiddle>
          <Title>
            Contact Us
          </Title>
          <Flex>
            <AiOutlinePhone style={{fontSize: '1.2rem'}}/>
            &nbsp;&nbsp;{phone}
          </Flex>
          <Flex>
            <AiOutlineMail style={{fontSize: '1.2rem'}}/>
            &nbsp;&nbsp;{email}
          </Flex>
          <Logo src={logo} alt="jpc logo" />
        </ColumnMiddle>
        <ColumnRight>
          <Title>Location</Title>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.5882062293126!2d-86.020427!3d41.729404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791c9f05c7%3A0xae904854f4f3fc25!2sJPC%20LLC!5e0!3m2!1sen!2sus!4v1595958396512!5m2!1sen!2sus" width="500" height="200" frameborder="0" allowfullscreen="" aria-hidden="false" title="jpc-map"></iframe>
          </div>
        </ColumnRight>
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
  padding: 3rem 0 1rem;
`
const Column = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 630px){
    text-align: center;
  }
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
  height: 65px;
  width: 90px;
  padding: 1.5rem 0;
  margin-left: 30px;
  

  @media screen and (max-width: 630px){
    margin-left: 0;
    padding: 2rem 0 0;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  padding: 7px 0;
`

const Copyright= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  font-size: 8px;
  padding: 5px 0 0;
`
const ColumnRight = styled(Column)`
  @media screen and (max-width: 1276px) {
    display: none;
  }
`
const ColumnMiddle = styled(Column)`
  @media screen and (max-width: 630px) {
    display: none;
  }
`

export default Footer
