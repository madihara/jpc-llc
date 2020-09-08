import React from 'react'
import HeaderLarge from '../SharedComponents/HeaderLarge'

const About = () => {

  const info='JPC started business in 1984 servicing the van conversion industry in Elkhart, IN.  Starting as a small family run business, JPC has expanded in size and production capabilities in the years since.  We have the ability to do large scale productions or one off custom projects with a variety of sewing, cutting, and finishing equipments and top grade fabrics and materials.'

  const info2='Servicing some of the largest industries in the world, like the airline and RV industries, we have experience producing large quantities of products but also work closely with small businesses in smaller scale productions as well as custom projects.  Our team of experienced sewers takes pride in their ability to take a prototype and make it come to life with precision and efficiency.'
  return (
    <div>
      <HeaderLarge 
      word1= 'about'
      word2='JPC'
      info={info}
      info2={info2}
      />
      <div style={{height: '300px'}}>
        Picture of outside of the building maybe? and more info on what they do today.
      </div>
    </div>
  )
}

export default About;
