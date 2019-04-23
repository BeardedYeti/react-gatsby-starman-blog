import React from 'react';
import Tags from './Tags'
import Img from 'gatsby-image'

class Projects extends React.Component {

  render() {
    return this.props.projects.allMarkdownRemark.edges.map(i => (
        <div>
            <a href={i.node.frontmatter.url}>
                <Img fixed={i.node.frontmatter.image.childImageSharp.fixed} />
                <h5>{i.node.frontmatter.title}</h5>
                <p>{i.node.frontmatter.description}</p>
                <div>
                    {i.node.frontmatter.tags.map(e => (
                      <Tags icon={e} />
                    ))}
                </div>
            </a>
        </div>
		))
  }
}

export default Projects