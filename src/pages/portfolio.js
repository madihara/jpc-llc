import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import  ImageCard from '../components/Portfolio/ImageCard'
import SharedHero from '../components/SharedComponents/SharedHero'

import heroImage from '../components/Services/images/herojpc2.jpg'

const PortfolioPage = () => {
  return (
    <Layout>
      <SharedHero image={heroImage} heading='Portfolio'/>
      <SEO title='Portfolio'/>
      <ImageCard/>
    </Layout>
  )
}

export default PortfolioPage
