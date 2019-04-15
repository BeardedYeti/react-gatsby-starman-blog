import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import Skill from '../components/Skill'

// Add Skills Here
const skills = [
  {skill: 'JavaScript', value: 4}, 
  {skill: 'CSS3', value: 5}, 
  {skill: 'HTML5', value: 5}
]

export default ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`Colin`, `Smith`, `Colin Smith`, `bio`, `developer`]}/>
    <main>
      <div className="about-header">
        <Img fixed={data.aboutPic.childImageSharp.fixed} />
        <h2>{data.site.siteMetadata.author.name}</h2>
        <h3>{data.site.siteMetadata.author.jobTitle}</h3>
        <p>{data.site.siteMetadata.author.description}</p>
      </div>
      <div className="about-skills">
        <ul>
            <Skill skills={skills} />
        </ul>
      </div>
      <div className="about-education">

      </div>
      <div className="about-experience">

      </div>
      <div className="about-awards">

      </div>
      <div className="about-interests">

      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          jobTitle
          description
        }
      }
    }
    aboutPic: file(relativePath: {eq: "images/about-pic.jpg"}) {
			childImageSharp {
        fixed(width: 150, height: 233) {
        	...GatsbyImageSharpFixed
        }
			}
    }
  }
`