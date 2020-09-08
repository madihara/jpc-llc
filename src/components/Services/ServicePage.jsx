import React from 'react'

import HeaderLarge from '../SharedComponents/HeaderLarge'
import ServicesInfo from './ServicesInfo'
import image from './images/arts-and-crafts-close-up-colors-2973392.jpg'

const ServicePage = () => {
  return (
    <>
    <HeaderLarge 
    word1='Our'
    word2='Services'
    src={image}
    />
    <ServicesInfo />
    </>
  )
}





export default ServicePage
