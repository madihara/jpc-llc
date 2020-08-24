import React from "react"
import { Link } from "gatsby"
import SEO from "../components/layout/seo"
import About from '../components/HomePage/About'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'
import DetailBox from '../components/HomePage/DetailBox'
import Industries from "../components/HomePage/Industries"
import Layout from '../components/layout/layout'
import {Zoom} from 'react-reveal'

import * as palette from '../variables/Variables'

const IndexPage = ({data}) => (
  <div>
  <Layout>
    <SEO title="Home" />
   
    <Hero>
      <StyledImage
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      >
        <Container>
          <Box>
            <Zoom><Title>WE SPECIALIZE IN COMMERCIAL SEWING.</Title>
            <SubTitle>
            From large commercial production to custom projects, we  <br/>have the experience to make your next project a success.
            </SubTitle>
            <Link to='/contact'>
              <ContactButton>
                Contact Us &rarr;
              </ContactButton>
            </Link>
            </Zoom>
          </Box>
        </Container>
      </StyledImage>
    </Hero>
    <DetailBox />
    <About />
    <Industries />
    </Layout>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "adult-analogue-indoors-2249290.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 950) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

// const ContactHeader = styled.div`
//   color: white;
//   background: #0a1128;
//   opacity: 0.7;
//   padding: 6px 4rem;
//   text-align: center;
// `

// const ContactText= styled.div`
//   color: white;
//   font-size: 0.8rem;
//   display: flex;
//   align-items: center;
// `

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-flow: row-wrap;
  justify-content: stretch;
  align-items: stretch;
`

const StyledImage = styled(BackgroundImage)`
  height: 92vh;
  width: 100%;
`
const Container = styled.div`
  
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`
const Box= styled.section`
  width: 45vw;
  margin-top: 6rem;
  padding: 3rem;
  /* background: rgba(255,255,255,0.2); */

  @media screen and (max-width: 1094px){
    width: 60vw;
  }

  @media screen and (max-width: 600px) {
    width: 85vw;
    padding: 1rem;
    margin: 1rem;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 800;
  margin: 0;
  padding: 0 1rem 0;

  @media screen and (max-width: 780px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`

const SubTitle=styled.h3`
  color: white;
  font-weight: 400;
  font-size: 1rem;
  padding: 1rem;
  margin: 0;

  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
  }
`
const ContactButton = styled.button`
  border: none;
  background: ${palette.SECONDARY_COLOR};
  color: white;
  padding: 1.3rem ;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.4s;
  margin: 1rem 1rem 2.6rem;

  :hover{
    background:white;
    color: ${palette.MAIN_COLOR};
    cursor: pointer;
    }
  `
