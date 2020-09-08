import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables/Variables'
import {Zoom} from 'react-reveal'


const HeaderLarge = ({word1, word2, info, info2, src}) => {
  return (
    <>
    <Container>
      <TitleBox>
        <Zoom>
          <Title>{word1} <br/>{word2}</Title>
        </Zoom>
      </TitleBox>
      <TextContainer>
        {src && ( <Image src={src}/>)}
        {info && (<TextBox>
          {info}<br/> <br/>{info2}
        
        </TextBox> 
        )}
        
      </TextContainer>
    </Container>
    </>
  )
}


const Container = styled.div`
  display: flex; 
  flex-flow: row-wrap;
  justify-content: stretch;
  width: 100%;
  padding-top: 115px;
`


const TitleBox= styled.div`
  display: flex;
  background: ${palette.SECONDARY_COLOR};
  color: white;
  height: 70vh;
  width: 50%;
  /* justify-content: center; */
  flex-grow: 1;
  align-items: center;
  text-transform: capitalize;

`

const Title= styled.h2`
  font-size: 5rem;
  padding-left: 100px;
  line-height: 5rem;
  font-weight: 600;
  position: relative;


`

const TextContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  width: 50%;
  height: 70px;
  margin-top: 230px;
`

const TextBox=styled.section`
  
  margin: 3rem 10rem;
  position: relative;

   &:before{
    content:"";
    display: block;
    width: 120px;
    height: 4px;
    position: absolute;
    background: ${palette.SECONDARY_COLOR};
    top: -30px;
    right: 10px;
  }
`
const Image = styled.img`
  object-fit: cover;
  overflow:hidden;
  height: 70vh;
  width: 100%;
  
`



export default HeaderLarge