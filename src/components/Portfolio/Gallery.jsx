import React, {useState} from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'
import * as palette from '../../variables/Variables'

const ImageCard = () => {

  const data = useStaticQuery(
    graphql`
      query{
        allContentfulGalleryItem{
          edges{
            node{
              id
              name
              attributes
              image{
                fluid(maxHeight: 400)
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



  const [isOpen, setIsOpen] = useState('')


  return (
    <>
    <Hero>
      <HeroTitle>Recent Projects</HeroTitle>
    </Hero>
    <Gallery>
      {data.allContentfulGalleryItem.edges.map((edge) => {
        return(
          <ImageContainer
          key={edge.node.name}
          active={isOpen === edge.node.name}
          onClick={() => (isOpen === edge.node.name) ? setIsOpen('') : setIsOpen(edge.node.name)}
          >
           {edge.node.image && ( <StyledBackgroundImage fluid={edge.node.image.fluid}> 
              <TitleBox 
              key={edge.node.name}>
                <Title>{edge.node.name}</Title>
                <SubTitle>Learn More</SubTitle>
              </TitleBox>
              <OverlayContainer active={isOpen === edge.node.name}>
                <InfoText>
                  <TitleSmall>{edge.node.name}</TitleSmall>
                 {edge.node.attributes &&(
                  <ul>
                  {edge.node.attributes.map((attribute) => {
                      return(
                      <ListItem>{attribute}</ListItem>
                      )
                    })}
                  </ul>)}
                </InfoText>
              </OverlayContainer>
            </StyledBackgroundImage>)}
          </ImageContainer>
      )})}
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
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  height: 275px;
  padding-top: 115px;
  
  @media screen and (max-width: 935px){
    padding-top: 60px;
    opacity: 1;
    
  }
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
  margin: 0 20px;
`


const ImageContainer = styled.div`
  margin: 20px;
  overflow: hidden;
  height: 400px;
  flex: 2 0 auto;
  

  @media screen and (max-width: 1008px) {
    flex: 1 1 auto;
  }

  @media screen and (max-width: 768px){
    height: 250px;
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
  object-fit: cover;
/* 
  &:hover{
    transform: scale(1.1);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.25, 0.95);
  } */
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


  &:hover{
    transform: scale(1.1);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.25, 0.95);
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    width: 100px;
  }
`
const Title= styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.6rem;

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
`
const SubTitle= styled.h5`
  padding: 0;
  margin: 0;
  font-weight: normal;

  @media screen and (max-width: 768px){
    font-size: .7rem;
  }
`
const ListItem = styled.li`
  text-transform: capitalize;

  @media screen and (max-width: 768px){
    font-size: 0.8rem;
  }
`

const InformationContainer = styled.div`
  padding: 6rem 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1076px) {
    padding: 6rem 3rem;
  }


`

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: .8rem;
  }

`
const InfoText = styled.div`
  color: white;
  padding: 3rem;

  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: ${palette.MAIN_COLOR};
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
  color: white;
  cursor: pointer;


  ${({ active }) =>
    active &&
    `
    bottom: 0;
    height: 100%;
  `}


`

const TitleSmall = styled.h5`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: .8rem;
  }
`

export default ImageCard;
