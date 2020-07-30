import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import Capabilities from '../components/Capabilities/CapabilitesPage'

const CapabilitiesPage = () => {
  return (
    <Layout>
      <SEO title="Capabilities"/>
      <Capabilities />
    </Layout>
  )
}

export default CapabilitiesPage
