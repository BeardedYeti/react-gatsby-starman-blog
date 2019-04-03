import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        title = "Main Index"
        keywords = {
          [`blog`, `gatsby`, `javascript`, `react`, `redux`, `graphql`, `netlify`, `relay`]
        }
      />
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {
        fields: [frontmatter___date],
        order: DESC
      }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
