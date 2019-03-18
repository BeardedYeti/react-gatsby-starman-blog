import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
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