import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/index.css'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const repeat = edges.map(edge => {
    const { date, title } = edge.node.frontmatter
    const { excerpt, id, fields } = edge.node

    return (
      <article key={id}>
        <h4><Link to={fields.slug} className="post-title">{ title }</Link></h4>
        <h5>{ date }</h5>
        <p>{ excerpt }</p>
      </article>
    )
  })

  return (
    <Layout hasNavigation>
      <SEO
        title="home"
        keywords={['learn', 'earn', 'sojourn', 'technology blog', 'creative technologist',]}
      />
      {
        repeat
      }
    </Layout>
  )
}
export default IndexPage

export const IndexQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
        excerpt
      }
    }
  }
}`
