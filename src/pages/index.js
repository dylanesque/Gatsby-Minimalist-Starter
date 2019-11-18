import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ siteDescription }) => (
  <Layout>
    <SEO title="Home" />

    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        textAlign: `center`,
      }}
    >
      <p>Building something beautiful today?</p>
      <p>This is where you start!</p>
    </div>
  </Layout>
)

export default IndexPage
