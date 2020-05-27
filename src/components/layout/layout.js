import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from './Footer'
import NavBar from './NavBar'




const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    <NavBar/>
        <main>{children}</main>
    <Footer/>
    </>
  )
}


export default Layout
