import React from "react"
import './styles.css'
import Footer from './Footer'
import NavBar from '../Navbar/HomeNav'





const Layout = ({ children}) => {

      return (
        <>
          <NavBar />
            <main>{children}</main>
          <Footer/>
        </>
      )
    
}



export default Layout



