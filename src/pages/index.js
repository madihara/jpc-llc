import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Home from '../components/HomePage/Home'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'
import DetailBox from '../components/SharedComponents/DetailBox'

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
          </Box>
        </Container>
      </StyledImage>
      <DetailBox />
    </Hero>
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
  display: flex;
  flex-direction: row;
  flex: auto;
  
`

const StyledImage = styled(BackgroundImage)`
  height: 110vh;
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
  font-size: 5rem;
  line-height: 4rem;
`

const SubTitle=styled.h3`
  color: white;
`