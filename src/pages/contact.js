import React from 'react'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Contact from '../components/Contact'

export default () => (
  <Layout>
    <SEO
      title = "Contact"
      keywords = {
        [`Colin Smith`, `Colin`, `Smith`, `colin`, `smith`, `boston`, `new hampshire`, `email`]
      }
    />
    <main style={{ 
      display: `block`,
      position: `relative`,
      paddingBottom: `5rem`,
      paddingTop: `1rem`
    }}>
      <h4 style={{
        textAlign: `center`,
        margin: `1rem`,
        padding: `1rem`
      }}> I 'd love to talk! Please fill out the form below</h4>
      <Contact />
    </main>    
  </Layout>
);
