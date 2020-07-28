import React, {useState} from 'react'
import styled from 'styled-components'


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


const ContactForm = () => {
  const [message, setMessage] = useState()

  return(
    <>
    <form method="POST" data-netlify="true" name="contact-form">
      <input type= "name" name="name" id="name" placeholder="name" />
      <input type= "email" name="email" id="email" placeholder="email" />
      <TextArea name="message" id="message" placeholder="tell us more about your project needs and timelines."></TextArea>
      <button type="submit" name="button">Send</button>
     
    </form>
    <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.5882062293126!2d-86.020427!3d41.729404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791c9f05c7%3A0xae904854f4f3fc25!2sJPC%20LLC!5e0!3m2!1sen!2sus!4v1595958396512!5m2!1sen!2sus" width="600" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
    </>
  )
}



const TextArea = styled.textarea`
  resize: none;
  color: red;
  height: 300px;
`

export default ContactForm