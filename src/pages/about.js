import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
    <p>I think I am therefore I am I think.</p>
  </Layout>
);
