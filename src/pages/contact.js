import React from 'react';
import { Link } from 'gatsby';
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
    <main>
      <h4> I 'd love to talk! Please fill out the form below</h4>
      <Contact />
    </main>    
  </Layout>
);
