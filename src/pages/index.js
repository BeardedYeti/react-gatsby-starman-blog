import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { formatReadingTime } from '../utils/helpers'

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
      <main>
        <div>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}
                </h3>
                <p>
                  {node.frontmatter.date}
                  {` • ${formatReadingTime(node.timeToRead)}`}
                </p>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        fileAbsolutePath: {
          regex: "/(posts)/.*\\.md$/"
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
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
