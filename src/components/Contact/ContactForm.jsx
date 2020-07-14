import React from 'react'
import styled from 'styled-components'



const ContactForm = () => {
  return(
    <form method="POST" data-netlify="true">
      <input type= "name" name="name" id="name" placeholder="name" />
      <input type= "email" name="email" id="email" placeholder="email" />
      <TextArea name="message" id="message" placeholder="tell us more about your project needs and timelines."></TextArea>
      <div data-netlify-recaptcha="true">I am not a robot</div>
    </form>
  )
}



const TextArea = styled.textarea`
  resize: none;
  color: red;
  height: 300px;
`



export default ContactForm