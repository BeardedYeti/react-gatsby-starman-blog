import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from "../components/layout"
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`Colin`, `Smith`, `Colin Smith`, `bio`, `developer`]}/>
    <Header headerText={data.site.siteMetadata.title} arbitraryPhrase="is arbitrary" />
    <p>I think I am therefore I am I think.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`