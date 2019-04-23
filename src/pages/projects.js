import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Layout from "../components/Layout"
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <main style={{ 
      minHeight: `100vh`,
      overflow: `hidden`,
      display: `block`,
      position: `relative`,
      paddingBottom: `100px`
    }}>
      <SEO title="projects" keywords={[`Colin`, `Smith`, `Colin Smith`, `projects`, `developer`, `portfolio`]}/>
      <Projects projects={data} />
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/(projects)/.*\\.md$/"
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            description
            image {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`