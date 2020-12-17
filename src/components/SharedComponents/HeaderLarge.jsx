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
  flex-flow: wrap;
  justify-content: stretch;
  width: 100%;
  margin-top: 115px;

  @media screen and (max-width: 935px){
    margin-top: 0;

  }

`


const TitleBox= styled.div`
  display: flex;
  background: ${palette.SECONDARY_COLOR};
  color: white;
  min-height: 70vh;
  max-height: 500px;
  width: 50%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  flex: 1 1 auto;

  @media screen and (max-width: 935px){
    margin-top: 0;
    background: ${palette.MAIN_COLOR};
    min-height: 50vh;
    
  }
`

const Title= styled.h2`
  font-size: 5rem;
  /* padding-left: 100px; */
  line-height: 5rem;
  font-weight: 600;
  position: relative;

  @media screen and (max-width: 414px) {
    font-size: 4rem;
    padding-left: 20px;
  }

`

const TextContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  width: 50%;
  min-height: 70vh; 
  min-width: 300px;
  
  @media screen and (max-width: 742px) {
    width: 90%;
  }
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

  @media screen and (max-width: 1183px) {
    margin: 3rem 1.5rem;
    width: 90%;
  }
`
const Image = styled.img`
  object-fit: cover;
  overflow:hidden;
  min-height: 70vh;
  width: 50%;
  flex-grow: 1;
  max-height: 500px;

  @media screen and (max-width: 742px) {
    display: none;
  }
`



export default HeaderLarge
