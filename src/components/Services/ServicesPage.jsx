import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

const ServicesPage = () => {
  
  const data = useStaticQuery(
    graphql`
      query{
        allContentfulFeatureCard {
          edges {
            node {
              title
              description{
                description
              }
              icon{
                id
                description
                fluid{
                  src
                }
              }
                }
              }
            }
          }
    `
    )
    
  
  
  return (
    <Container>
      <ul>
        {data.allContentfulFeatureCard.edges.map(edge => {
          return(
          
            <li>
              <img src={edge.node.icon.fluid.src} />
              <h1>
              {edge.node.title}
              </h1>
              <p>{edge.node.description.description}</p>
            
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default ServicesPage
