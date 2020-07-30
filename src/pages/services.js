import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import ServicesPage from '../components/Services/ServicesPage'


const Services = () => {
  return (
    <Layout>
      <SEO title='Services'/>
      <ServicesPage />
    </Layout>
  )
}

export default Services