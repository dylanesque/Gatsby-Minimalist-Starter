import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ siteDescription }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{siteDescription}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>

  </Layout>
)

export default IndexPage
