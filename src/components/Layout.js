import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Footer from '../components/Footer'

let now = new Date();
const year = now.getFullYear();

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              title
              author {
                name
                twitter
                github
              }
            }
          }
        }
      `
    }
    render={(data) => (
        <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
          <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h2 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h2>
            </Link>  
            <ul style={{ listStyle: `none`, float: `right`, marginTop: 0, marginLeft: `1.58rem`, marginBottom: `1.58rem`}}>
              <ListLink to="/"> Blog </ListLink>
              <ListLink to="/about/"> About </ListLink>
              <ListLink to="/projects/"> Projects </ListLink>
              <ListLink to="/contact/"> Contact </ListLink>
            </ul>
          </header>
          {children}
          <Footer 
            github={data.site.siteMetadata.author.github} 
            twitter={data.site.siteMetadata.author.twitter} 
            name={data.site.siteMetadata.author.name}
            style={{ 
              position: `absolute`, 
              bottom: `0`, 
              width: `100%`
            }}
          />
        </div>
    )}
  />
)