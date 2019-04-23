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
      overflow: `hidden`,
      display: `block`,
      position: `relative`,
      paddingBottom: `100px`
    }}>
      <h4> I 'd love to talk! Please fill out the form below</h4>
      <Contact />
    </main>    
  </Layout>
);
