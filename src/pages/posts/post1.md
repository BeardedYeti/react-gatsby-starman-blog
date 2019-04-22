---
templateKey: blog-post
title: Space space space...
author: Colin Smith
date: '2019-03-17'
description: Space is a big place. Learn from the best about the big black thing above us.
tags:
  - Space
  - Science
  - Winning
---
If you want to learn about space, you gotta learn about the planets. If you want to learn about the planets then watch this video...

```
import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from "../components/layout"
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`Colin`, `Smith`, `Colin Smith`, `bio`, `developer`]}/>
    <Header headerText={data.site.siteMetadata.title} arbitraryPhrase="is arbitrary" />
    <p>I think I am therefore I am I think.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hm8oqlg8z4s" frameborder="0" allowfullscreen></iframe>
