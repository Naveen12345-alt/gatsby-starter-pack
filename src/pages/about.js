import React from "react"
import Layout from "../components/layout/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>hello from about page</h1>
        <p className={text}>lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
    </Layout>
  )
}

export default about
