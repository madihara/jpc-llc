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

// const useWindowSize = (initialState = "100%", { ttl = 100 } = {}) => {
//   // initialState is used before the component mounts client-side
//   const [height, setHeight] = useState(initialState)

//   useEffect(() => {
//     const calculateHeight = debounce(() => {
//       setHeight(window.innerHeight)
//     }, ttl)

//     calculateHeight()
//     window.addEventListener("resize", calculateHeight)

//     return () => {
//       // deregister event listener on component dismount
//       window.removeEventListener("resize", calculateHeight)
//     }
//   }, [ttl])

//   return height
// }

const useWindowSize = (initialState= '100%') => {
  const [size, setSize] = useState(window.innerWidth) 
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return size
}

const OverflowHidden=styled.div`
  overflow-x: hidden;
  height: 100%;
`

export default Layout



