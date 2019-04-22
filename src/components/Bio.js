import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'

class Content extends React.Component {
		render() {
				return (
					<div
						style={{
							display: 'flex',
						}}
					>
						<Img 
							fixed={this.props.data.bioPic.childImageSharp.fixed} 
							style={{
								marginRight: rhythm(1 / 2),
								marginBottom: 0,
								width: rhythm(2),
								height: rhythm(2),
								borderRadius: '50%',
							}}
						/>
						<p style={{ maxWidth: 310 }}>
							Personal blog and portfolio of <a href={'https://mobile.twitter.com/' + this.props.twitter}>{this.props.name}</a>.
							Drink coffee, and be excellent to each other!
						</p>
					</div>
				)
		}
	}

const query = graphql `
  query {
    bioPic: file(relativePath: {eq: "images/bio-pic.jpg"}) {
			childImageSharp {
        fixed(width: 75, height: 75) {
        	...GatsbyImageSharpFixed
        }
			}
  }
  }
`

export default ({twitter, name}) => <StaticQuery
	query={query}
	render={data => <Content data={data} twitter={twitter} name={name}/>}
/>