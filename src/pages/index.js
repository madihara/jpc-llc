import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import About from '../components/HomePage/About'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'
import DetailBox from '../components/HomePage/DetailBox'
import CADInfo from '../components/HomePage/CADInfo'
import Industries from "../components/HomePage/Industries"

import * as palette from '../variables/Variables'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   
    <Hero>
      <StyledImage
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      >
        <Container>
          <Box>
            <Title>WE SPECIALIZE IN COMMERCIAL SEWING.</Title>
            <SubTitle>
            At JPC we have been manufacturing quality industrial textiles since 1984. From large commercial production to custom projects, we have the experience to make your next project a success.
            </SubTitle>
            <Link to='/contact'>
              <ContactButton>
                Contact Us &rarr;
              </ContactButton>
            </Link>
          </Box>
        </Container>
      </StyledImage>
      <DetailBox />
    </Hero>
    <About />
    <CADInfo />
    <Industries />
  </Layout>
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

const Hero = styled.div`
position: relative;
  display: flex;
  flex-flow: row-wrap;
  height: 100%;
  justify-content: stretch;
  align-items: stretch;
  
  
`

const StyledImage = styled(BackgroundImage)`
  height: 109vh;
  width: 75%;
`
const Container = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`
const Box= styled.section`
  width: 45vw;
  margin-top: 6rem;
  padding: 1rem 2rem;
  background: rgba(0,0,0,0.6);
`

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 800;
`

const SubTitle=styled.h3`
  color: white;
  font-weight: 400;
`
const ContactButton = styled.button`
  border-radius: 50px;
  border: none;
  background: ${palette.SECONDARY_COLOR};
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.4s;

  :hover{
    background:white;
    color: ${palette.MAIN_COLOR};
    cursor: pointer;
    }
  `
