import React from 'react'
import styled from 'styled-components'
import SharedHero from '../SharedComponents/SharedHero'

import heroimg from '../Services/images/herojpc2.jpg'

const About = () => {
  return (
    <div>
      <SharedHero heading='About Us' image={heroimg} />
      About Us
    </div>
  )
}

export default About;
