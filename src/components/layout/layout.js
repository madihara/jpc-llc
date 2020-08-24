import React from "react"
import './styles.css'
import Footer from './Footer'
import styled from 'styled-components'
import NavBar from '../Navbar/HomeNav'
import MobileNav from '../Navbar/MobileNav'





const Layout = ({ children}) => {

      return (
        <OverflowHidden>
          {/* <MobileNav /> */}
          <NavBar />
            <main>{children}</main>
          <Footer/>
        </OverflowHidden>
      )
    
}

const OverflowHidden=styled.div`
  overflow-x: hidden;
`

export default Layout



