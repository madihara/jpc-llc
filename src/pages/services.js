import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import ServicesPage from '../components/Services/ServicesPage'

const Services = () => {
  return (
    <Layout>
      <SEO title='services'/>
      <ServicesPage />
    </Layout>
  )
}

export default Services
