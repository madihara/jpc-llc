import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import  Gallery from '../components/Portfolio/Gallery'
import SharedHero from '../components/SharedComponents/SharedHero'

import heroImage from '../components/Services/images/herojpc2.jpg'

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title='Portfolio'/>
      <Gallery/>
    </Layout>
  )
}

export default PortfolioPage
