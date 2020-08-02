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
    <Gallery>
      {data.allContentfulGalleryItem.edges.map((edge, item) => {
        return(
          <ImageContainer>
          <StyledBackgroundImage fluid={edge.node.image.fluid}>
            <h1>{edge.node.name}</h1>
          </StyledBackgroundImage>
          
          </ImageContainer>
        )
      })}
    </Gallery>
  )
}
const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
   */
  height: 300px;
  width: 600px;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    transform: scale(.9);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.25, 0.95);
  }
`

export default ImageCard;
