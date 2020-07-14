import React from 'react'


const ContactForm = () => {
  return(
    <form method="POST" data-netlify="true">
      <input type= "name" name="name" id="name" placeholder="name" />
      <input type= "email" name="email" id="email" placeholder="email" />
      <textarea name="message" id="message" placeholder="tell us more about your project needs and timelines." />
      <div data-netlify-recaptcha="true"></div>
    </form>
  )
}

export default ContactForm