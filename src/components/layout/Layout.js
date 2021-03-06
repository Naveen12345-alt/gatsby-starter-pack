import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import "./layout.css"

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
