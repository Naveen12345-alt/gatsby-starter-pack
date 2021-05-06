import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

// preserves useful defaults and tries to normalize styles across browsers
import "normalize.css"
import "../../assets/css/main.css"

// Wrapper Component
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
