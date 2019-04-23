import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import Skill from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'
import ACP from '../components/ACP'
import Interests from '../components/Interests'

// Add Skills Here
const skills = [
  {skill: 'JavaScript', value: 4, color: '#f0db4f'}, 
  {skill: 'CSS3', value: 5, color: '#0396DE'}, 
  {skill: 'HTML5', value: 5, color: '#DD4A25'}
]

const degrees = [
  {
    degree: 'Bachelors of Science', 
    school: 'Rochester Institute of Technology', 
    year: '2011', 
    major: 'Biotechnology', 
    minor: 'World History'
  }
]

const jobs = [
  {
    title: 'Full Stack Developer',
    date: 'May 15th, 2016 - Present',
    company: 'Shawmut Communications Group',
    description: [
      'Built an API with GraphQL, Express.js, JWT, Jest, Enzyme, Chai, Docker, Alpine-Linux',
      'Built a reverse proxy server with Express, NGINX, Letsencrypt, Docker, Alpine-Linux',
      'Building a project management application as microservices with React.js, Django, Sass, Jest, Docker',
      'Maintain, and upgrade a client interfacing dashboard application with JQuery, Symphony, NGINX, Sass, Bootstrap, Docker',
      'Build serverless functions for business solutions, and custom data integrations with Serverless.js, AWS Lambda, AWS S3, AWS Cloud Watch'
    ]
  }
]

const acps = [
  {
    title: 'Paper 1',
    date: 'June 1st, 2015'
  },
  {
    title: 'Paper 2',
    date: 'August 15th, 2016'
  },
  {
    title: 'Front-End Development Certificate - FreeCodeCamp',
    date: 'February 21st, 2016'
  }
]

const interests = [
  'Software Development',
  'Woodworking',
  'Brewing Beer',
  'Video Games',
  'Film',
  'Board Games',
  'Dungeons & Dragons',
  'Nature',
  'Hiking',
  'Travelling',
  'Football',
  'Classic Rock Music',
  'Hard Rock Music',
  'Indie Folk Music',
  'Folk Rock Music',
  'Classical Music'
]

export default ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`Colin`, `Smith`, `Colin Smith`, `bio`, `developer`]}/>
    <main style={{ 
      minHeight: `100vh`,
      overflow: `hidden`,
      display: `block`,
      position: `relative`,
      paddingBottom: `100px`
    }}>
      <div className="about-header">
        <Img fixed={data.aboutPic.childImageSharp.fixed} />
        <h2>{data.site.siteMetadata.author.name}</h2>
        <h3>{data.site.siteMetadata.author.jobTitle}</h3>
        <p>{data.site.siteMetadata.author.description}</p>
      </div>
      <div className="about-skills">
        <h4>Skills: </h4>
        <ul>
            <Skill skills={skills} />
        </ul>
      </div>
      <div className="about-education">
        <h4>Education: </h4>
        <ul>
            <Education education={degrees} />
        </ul>
      </div>
      <div className="about-experience">
        <h4>Experience: </h4>
        <ul>
            <Experience experience={jobs} />
        </ul>
      </div>
      <div className="about-awards">
        <h4>Awards, Certificates, and Publications: </h4>
        <ul>
            <ACP details={acps} />
        </ul>
      </div>
      <div className="about-interests">
        <h4>Interests: </h4>
        <ul>
            <Interests interests={interests} />
        </ul>
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