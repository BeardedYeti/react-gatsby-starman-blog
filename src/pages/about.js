import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Layout from "../components/Layout"
import SEO from '../components/SEO'

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