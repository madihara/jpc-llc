import React from 'react'
import HeaderLarge from '../SharedComponents/HeaderLarge'

const About = () => {

  const info='JPC started business in 1984 servicing the van conversion industry in Elkhart, IN.  Starting as a small family run business, JPCLorem ipsum dolor sit amet, consectetur adipiscing elit. '

  const info2='Quisque gravida leo non venenatis fermentum. Morbi quis sem at neque pretium tempor eu ac arcu. Ut metus massa, feugiat sed iaculis ac, convallis vel est. Donec neque nulla, facilisis in iaculis quis, imperdiet sit amet erat. Morbi mi tortor, varius id accumsan et, convallis quis nunc. Donec semper pretium augue a ornare. Vivamus pulvinar purus a purus congue sodales et a augue.'
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
