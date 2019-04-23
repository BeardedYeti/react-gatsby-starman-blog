import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from "../components/SEO"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main style={{ 
        minHeight: `100vh`,
        overflow: `hidden`,
        display: `block`,
        position: `relative`,
        paddingBottom: `100px`
      }}>
        <SEO title="Site Map" />
        <Header headerText="Site Files" arbitraryPhrase="is arbitrary"/>
        <div>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`