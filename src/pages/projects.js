import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Layout from "../components/Layout"
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="projects" keywords={[`Colin`, `Smith`, `Colin Smith`, `projects`, `developer`, `portfolio`]}/>
    <Header headerText={data.site.siteMetadata.title} arbitraryPhrase="is arbitrary" />
    <p>Projects Here</p>
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