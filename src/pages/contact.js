import React from 'react'
import NavBar from '../components/layout/NavBar'
import SEO from '../components/layout/seo'

import ContactForm from '../components/Contact/ContactForm'

const ContactPage = () => {
  return (
    <>
    <NavBar/>
      <SEO title='Contact'/>
      <ContactForm />  
    </>
  )
}

export default ContactPage
