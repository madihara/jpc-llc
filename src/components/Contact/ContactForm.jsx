import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import {AiFillPhone, AiOutlineMail,} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'


import styles from './contact.module.css'

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query{
  site{
    siteMetadata{
      title
      author
      business{
        name
        streetAddress
        cityAddress
        phone
        email
      }
    }
  }
}
`)

  const { streetAddress, cityAddress, phone, email } = data.site.siteMetadata.business

  return (
    <>
      <section className={styles.container}>
        <div className={styles.box1}>
          <h2 className={styles.title}>Send us a message.</h2>
          <form
            className={styles.form}
            action="mailto:madisonharadine@gmail.com"
          >
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="Name"
              ></input>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                title="Email"
                className={styles.formControl}
                placeholder="email@email.com"
              ></input>
            </div>
            <div>
              <textarea
                type="message"
                name="message"
                id="message"
                className={`${styles.formControl} ${styles.text}`}
                placeholder="Tell us more about your project needs and timeline."
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="send"
                className={styles.submit}
              ></input>
            </div>
          </form>
        </div>
        <div className={styles.box2}>
          <h3 className={styles.title2}>Contact Us</h3>

          <div className={styles.contact}>
            <h3 className={styles.subs}>Phone</h3>
            <AiFillPhone/>
            <span> &nbsp; {phone}</span>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.subs}>Email</h3><div className={styles.flex}>
              <AiOutlineMail />
              <div> &nbsp; {email}</div>
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.subs}>Address</h3>
            <div className={styles.flex}>
              <FaMapMarkerAlt />
              <div>
                {streetAddress}<br></br>
                {cityAddress}
              </div>
            </div>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.203895273583!2d-86.02549457468723!3d41.72893430399752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791dd64e67%3A0x25f3651a67b5576!2s2926%20Paul%20Dr%2C%20Elkhart%2C%20IN%2046514!5e0!3m2!1sen!2sus!4v1573413624243!5m2!1sen!2sus"
            width="380"
            height="300"
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  )
}


export default ContactForm