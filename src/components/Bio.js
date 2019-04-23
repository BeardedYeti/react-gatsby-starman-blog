import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'

class Content extends React.Component {
		render() {
				return (
					<div>
						<Img 
							fixed={this.props.data.bioPic.childImageSharp.fixed} 
							style={{
								marginRight: `0.79rem`,
								marginBottom: `0`,
								width: `3.16rem`,
								height: `3.16rem`,
								borderRadius: '50%',
								display: `inline-block`
							}}
						/>
						<p style={{ 
							maxWidth: 310,
							display: `inline-block`,
							textAlign: `left` 
						}}>
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