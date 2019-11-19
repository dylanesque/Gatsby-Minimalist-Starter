import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import vince from '../images/vince.gif'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={vince} alt="Vince from Pulp Fiction looking around"></img>
    <p>It's not here, chief.</p>
  </Layout>
)

export default NotFoundPage
