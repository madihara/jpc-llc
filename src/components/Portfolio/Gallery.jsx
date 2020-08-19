import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

const ImageCard = () => {

  const data = useStaticQuery(
    graphql`
      query{
        allContentfulGalleryItem{
          edges{
            node{
              id
              name
              image{
                fluid
                  {
                    ...GatsbyContentfulFluid
                  }
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
    <Hero>
      <HeroTitle>Recent Projects</HeroTitle>
    </Hero>
    <Gallery>
      {data.allContentfulGalleryItem.edges.map((edge, item) => {
        return(
          
          <ImageContainer>
          <StyledBackgroundImage fluid={edge.node.image.fluid}>
            <TitleBox>
              <Title>{edge.node.name}</Title>
                <SubTitle>Learn More</SubTitle>
            </TitleBox>
          </StyledBackgroundImage>
          
          </ImageContainer>
         
        )
      })}
    </Gallery>
    <InformationContainer>
      <Text>
        Have an idea for a project not shown here? Reach out to us today to discuss your vision and the ways we can assist.
      </Text>
    </InformationContainer>
    </>
  )
}

const Hero = styled.div`
  color: white;
  opacity:0.8;
  background: #0a1128;
  text-align: center;
  height: 200px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`

const HeroTitle= styled.h3`
  text-align: center;
  font-weight: normal;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-flow: wrap;
  justify-content: stretch;
  height: 100%;
  margin: 0 5px;
`


const ImageContainer = styled.div`
  margin: 5px;
  overflow: hidden;
  height: 400px;
  object-fit: cover;
  flex: 1 1 auto;

  @media screen and (max-width: 1008px) {
    flex: 1 1 auto;
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  contain: content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;

  &:hover{
    transform: scale(1.1);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.25, 0.95);
  }
`
const TitleBox = styled.div`
  background: white;
  height: 90px; 
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0 25px;
  opacity: 0.7;
  font-weight: bold;
`
const Title= styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
`
const SubTitle= styled.h5`
  padding: 0;
  margin: 0;
  font-weight: normal;
`

const InformationContainer = styled.div`
  padding: 6rem 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  /* text-transform: uppercase; */
  font-size: 1.1rem;
  text-align: center;

`

export default ImageCard;
