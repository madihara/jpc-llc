import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import About from '../components/AboutUs/About'

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO title="About Us"/>
      <About />
    </Layout>
  )
}

export default AboutUsPage
