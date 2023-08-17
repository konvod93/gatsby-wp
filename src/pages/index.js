import * as React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Starting Here!</p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
