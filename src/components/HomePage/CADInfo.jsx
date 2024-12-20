import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowRoundForward} from 'react-icons/io'
import {Fade} from 'react-reveal'
import {Link} from 'gatsby'

import * as palette from '../../variables/Variables'

import image1 from './images/image.jpg'

const CadInfo = () => {

  const data = useStaticQuery(
    graphql`
      query{
        allContentfulGalleryItem{
          edges{
            node{
              image{
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )


  return (
    <Container>
      <ImageBox>
        <Image src={image1} alt="" />
      </ImageBox>
      <Fade right>
      <TextBox>
      <Heading>
        Some of our Quality work
      </Heading> 
      <SubHeading>
        Here are a few of the products we can produce in small quantities or large-volume orders. One more sentence to see how the layout looks with a little more text.
      </SubHeading>
      <ButtonLink to='/portfolio'>
        Full Gallery  &nbsp;
        <IoIosArrowRoundForward style={{fontSize: '20px'}}/>
      </ButtonLink>
      </TextBox>
      </Fade>
      <ScrollBox>
        {data.allContentfulGalleryItem.edges.reverse().filter((data, index) => index < 5 ).map((edge, index) => {
          return(
            <Slide key={index}>
              <SlideImg fluid={edge.node.image.fluid} />
            </Slide>
          )
        })}
      </ScrollBox>
      <Left>
          <IoIosArrowDropleft />
        </Left>
        <Right>
          <IoIosArrowDropright />
        </Right>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${palette.MAIN_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 0rem 3rem 3rem;
  position: relative;
`
const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  /* background: red; */
  
 
`
const ImageBox= styled.div`
  width: 40vw;
  padding-bottom: 80px;
`
const Image = styled.img`
  height: 600px;
  width: 700px;
  object-fit: cover;
  /* filter: grayscale(100%); */

`
const Heading = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0;
  /* margin: 7rem 7rem -1rem 0; */
  position: relative;
  text-align: right;

  &:before {
    content:"";
    display: block;
    position: absolute;
    height: 4px;
    width: 120px;
    background: white;
    right:0;
    top: -15px;
  }
`
const SubHeading = styled.p`
  text-align: right;
  color: white; 
  margin-top: -28px;
  padding-left: 12rem;
  padding-right: 0;
  font-family: sans-serif;
  font-size:1.1rem;
`
const ButtonLink = styled(Link)`
  margin-left: auto;
  background: ${palette.SECONDARY_COLOR};
  border: none;
  padding: 10px 25px;
  border-radius: 2px;
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  transition: 0.7s;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${palette.MAIN_COLOR};
    background: white;
    cursor: pointer;
  }
`
const ScrollBox = styled.div`
  width: 800px;
  height: 200px;
  color: white;
  position: absolute;
  left: 15%;
  top: 70%;
  /* background: red; */
  display: flex;
  flex-direction: row;
  justify-content: left;
  overflow: hidden;
`
const Slide = styled.div`
  /* min-width: 300px; */
  color: blue;
  margin: 0 50px 0 0;
  border: 1px solid white;
`
const SlideImg = styled(Img)`
  width: 300px;
  height: 200px;
  object-fit: contain;
`

const Left = styled.button`
  position: absolute;
  bottom: 6%;
  right: 22%;
  color: white;
  height: 60px;
  width: 60px;
  font-size: 40px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`
const Right = styled.button`
  position: absolute;
  bottom: 6%;
  right: 18%;
  height: 60px;
  width: 60px;
  font-size: 40px;
  z-index: 20;
  color: white;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`

export default CadInfo
