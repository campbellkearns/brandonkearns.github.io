import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={['learn', 'earn', 'sojourn', 'technology blog', 'creative technologist', ]} />
    <article>
      <h4>18 december 2018</h4>
      <h3>What is a PWA, anyway?</h3>
      <p>my best learning happens while doing and this webpage is a good example of that. the logo at the bottom of the page (or, top right) is just a photo of the upper left quadrant of my head and, of course, the fro. the original photo came out as a square which on many accounts gets cropped to a circular...</p>
    </article>
    <article>
      <h4>07 november 2018</h4>
      <h3>Allowing Remote Connections on a Postgres Instance</h3>
      <p>my best learning happens while doing and this webpage is a good example of that. the logo at the bottom of the page (or, top right) is just a photo of the upper left quadrant of my head and, of course, the fro. the original photo came out as a square which on many accounts gets cropped to a circular...</p>
    </article>
    <article>
      <h4>23 october 2018</h4>
      <h3>Takeaways From My First Conference Talk</h3>
      <p>my best learning happens while doing and this webpage is a good example of that. the logo at the bottom of the page (or, top right) is just a photo of the upper left quadrant of my head and, of course, the fro. the original photo came out as a square which on many accounts gets cropped to a circular...</p>
    </article>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
