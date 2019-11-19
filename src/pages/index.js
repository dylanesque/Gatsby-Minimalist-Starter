import React from "react"
import styled from '@emotion/styled';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PlaceholderText>
      <p>Building something beautiful today?</p>
      <p>Start right here!</p>
    </PlaceholderText>
  </Layout>
)

export default IndexPage

const PlaceholderText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin: 10rem;
  padding: 20px;

`
