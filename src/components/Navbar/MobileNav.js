import React, {useState} from 'react'
import styled from 'styled-components'

const MobileNav = () => {
  const[open, setOpen] =useState(false)

  return (
    <Burger open={open} onClick={() => setOpen(!open)}>
      Mobile Nav
    </Burger>
  )
}

const Burger = styled.div`
  background: red;
  height: 300px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`

export default MobileNav
