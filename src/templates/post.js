import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header';

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<div>
				<Header headerText={post.frontmatter.title} arbitraryPhrase="is arbitrary" />
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`