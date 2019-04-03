import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import {
  FaGithub,
  FaTwitter
} from 'react-icons/fa';
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
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
          <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
            </Link>  
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/"> Home </ListLink>
              <ListLink to="/about/"> About </ListLink>
              <ListLink to="/contact/"> Contact </ListLink>
            </ul>
          </header>
          {children}
          <p>{data.site.siteMetadata.Author}</p>
          <Footer 
            github={data.site.siteMetadata.author.github} 
            twitter={data.site.siteMetadata.author.twitter} 
            name={data.site.siteMetadata.author.name}
          />
        </div>
    )}
  />
)