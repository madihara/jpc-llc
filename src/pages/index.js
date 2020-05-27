import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HIIII This is the Jpc homepage I am restarting the development of this site</h1>
    <Link to='/contact'>Contact</Link>
  </Layout>
)

export default IndexPage
