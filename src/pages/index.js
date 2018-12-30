import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const repeat = edges.map(edge => {
    const { date, title } = edge.node.frontmatter
    const { excerpt } = edge.node
    return (
      <article>
        <h3>{ title }</h3>
        <h4>{ date }</h4>
        <p>{ excerpt }</p>
      </article>
    )
  })

  return (
    <Layout>
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
  query {
    allMarkdownRemark {
      edges {
        node {
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
  }
`
