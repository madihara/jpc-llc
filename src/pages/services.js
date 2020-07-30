import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import ServicePage from '../components/Services/ServicePage'


const Services = () => {
  return (
    <Layout>
      <SEO title='services'/>
      <ServicePage />
    </Layout>
  )
}

export default Services