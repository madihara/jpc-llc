import React from 'react'
import SimpleNav from '../components/layout/SimpleNav'
import SEO from '../components/layout/seo'

import ContactForm from '../components/Contact/ContactForm'

const ContactPage = () => {
  return (
    <>
    <SimpleNav/>
      <SEO title='Contact'/>
      <ContactForm />  
    </>
  )
}

export default ContactPage
