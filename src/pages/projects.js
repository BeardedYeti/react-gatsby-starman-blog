import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Projects from '../components/Projects'
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const projects = [
  {
    title: 'react-gatsby-starman-blog',
    url: 'https://github.com/BeardedYeti/react-gatsby-starman-blog',
    description: 'Personal blog and portfolio site built with Gatsbyjs and React',
    image: '',
    tags: [
      'React',
      'Gatsby',
      'GraphQL',
      'Redux',
      'JavaScript'
    ]
  },
  {
    title: 'Shawmut GraphQL API',
    url: 'https://api.shawmutdelivers.com',
    description: 'GraphQL API Gateway for Shawmut Communications Group that interfaces with an enterprise system, and acts as the data layer for a microservices',
    image: '',
    tags: [
      'GraphQL',
      'Apollo.js',
      'JWT',
      'JavaScript'
    ]
  },
]

export default ({ data }) => (
  <Layout>
    <SEO title="projects" keywords={[`Colin`, `Smith`, `Colin Smith`, `projects`, `developer`, `portfolio`]}/>
    <Projects projects={projects} />
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