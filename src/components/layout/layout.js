import React from "react"
import './styles.css'
import Footer from './Footer'
import styled from 'styled-components'
import NavBar from '../Navbar/HomeNav'
import MobileNav from '../Navbar/MobileNav'





const Layout = ({ children}) => {

  let width = window.innerWidth
  let navbar;
  if(width > 1136) {
    navbar = <NavBar />
  } else{
    navbar = <MobileNav />
  }


      return (
        <OverflowHidden>
          {navbar}
            <main>{children}</main>
          <Footer/>
        </OverflowHidden>
      )
    
}

const OverflowHidden=styled.div`
  overflow-x: hidden;
  height: 100%;
`

export default Layout



