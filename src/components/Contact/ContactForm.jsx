import React from 'react'
import styled from 'styled-components'



const ContactForm = () => {
  return(
    <form method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
      <input type= "name" name="name" id="name" placeholder="name" />
      <input type= "email" name="email" id="email" placeholder="email" />
      <TextArea name="message" id="message" placeholder="tell us more about your project needs and timelines."></TextArea>
      <button type="submit" value="send"/>
      <div data-netlify-recaptcha="true"></div>
    </form>
  )
}



const TextArea = styled.textarea`
  resize: none;
  color: red;
  height: 300px;
`

export default ContactForm