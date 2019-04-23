import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main style={{ 
          minHeight: `100vh`,
          overflow: `hidden`,
          display: `block`,
          position: `relative`,
          paddingBottom: `100px`
        }}>
          <SEO title="404: Not Found" />
          <h1>Not Found</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </main>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`