import React from "react"
import './styles.css'
import Footer from './Footer'
import NavBar from './NavBar'
import SimpleNav from './SimpleNav'




const Layout = ({ children}) => {

      return (
        <>
          <SimpleNav/>
            <main>{children}</main>
          <Footer/>
        </>
      )
    
}



export default Layout



