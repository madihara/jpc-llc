import React, {useState, useEffect} from "react"
import './styles.css'
import Footer from './Footer'
import styled from 'styled-components'
import NavBar from '../Navbar/HomeNav'
import MobileNav from '../Navbar/MobileNav'





const Layout = ({ children}) => {

  const width = useWindowSize()
  
  let navbar;
  if(width > 936) {
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

const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  },[])
  return size
}

const OverflowHidden=styled.div`
  overflow-x: hidden;
  height: 100%;
`

export default Layout



