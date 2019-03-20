import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout hasNavigation>
    <SEO title="learn | brandonkearns.com" />
    <h1>LEARN</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
