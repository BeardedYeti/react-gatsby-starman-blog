import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import Comments from '../components/Comments'
import SEO from '../components/SEO'

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<SEO 
				title={post.frontmatter.title} 
				description={post.frontmatter.description}
				slug={post.fields.slug}
			/>
			<main>
          <article>
            <header>
              <h1>
                {post.frontmatter.title}
              </h1>
              <p>
								{formatPostDate(post.frontmatter.date)}
								{` • ${formatReadingTime(post.timeToRead)}`}
              </p>
            </header>
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
						<div>
							<Comments postNode={post} siteMetadata={data.site.siteMetadata} />
						</div>
					</article>
      </main>
		</Layout>
	)
}

export const query = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
      siteMetadata {
        title
        subtitle
        author {
          name
          twitter
        }
        disqusShortname
        siteUrl
      }
    }
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			timeToRead
			frontmatter {
				title
				author
				description
				date(formatString: "MMMM DD, YYYY")
			}
			fields {
				slug
			}
		}
	}
`