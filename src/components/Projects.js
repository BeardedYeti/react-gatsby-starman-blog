import React from 'react';
import {rhythm} from '../utils/typography'
import { graphql, StaticQuery } from "gatsby"
import Tags from './Tags'
import Img from 'gatsby-image'

class Project extends React.Component {

  render() {
    return this.props.projects.map(i => (
            <div>
                <a href={i.url}>
                    <Img fluid={i.image} />
                    <h5>{i.title}</h5>
                    <p>{i.description}</p>
                    <div>
                        {i.tags.map(e => (
                          <Tags icon={e} />
                        ))}
                    </div>
                </a>

            </div>
		))
  }
}

const query = graphql `
  query {
    image1: file(relativePath: {eq: "images/demo-star.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    image2: file(relativePath: {eq: "images/shawmut-api.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`

export default ({projects}) => <StaticQuery
	query={query}
  render={data => <Project data={data} projects={projects} />}
/>