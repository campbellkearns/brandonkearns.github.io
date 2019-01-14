import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SojournPage = () => (
  <Layout hasNavigation>
    <SEO title="sojourn | brandonkearns.com" />
    <h1>SOJOURN</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SojournPage
