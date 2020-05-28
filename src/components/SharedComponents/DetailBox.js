import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'


const DetailBox = ({props}) => {
  return (
   <Section>
    <Box>
      3d CAD Measurements
    </Box>
    <Box>
      Commercial Sewing
    </Box>
    <Box>
    Other Services
    </Box>
</Section>
  )
}
const Section = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* justify-content: stretch; */
  /* align-items: center; */
`

const Box = styled.div`
  border: 3px solid #ececec;
  margin: 1rem;
  width: 90%;
  height: 250px;
`

const Image = styled(Img)`
  height: 100px;
`



export default DetailBox
