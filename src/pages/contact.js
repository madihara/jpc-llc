import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'

import ContactForm from '../components/Contact/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='contact'/>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
