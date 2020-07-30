import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

import styles from './services.module.css'

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
            <div className={styles.container}>
              <div className={styles.info}>
                <h3 className={styles.title}>
                  {edge.node.title}
                </h3>
                <p className={styles.first}>
                  paragraph
                </p>
              </div>
              <div className={styles.image}>
                </div>
              </div>
           
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
