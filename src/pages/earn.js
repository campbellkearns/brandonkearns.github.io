import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const EarnPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const earnPosts = edges.map(edge => {
    const { date, title } = edge.node.frontmatter
    const { excerpt, id, fields } = edge.node

    return (
      <Post key={id}>
        <h3><Link to={fields.slug}>{ title }</Link></h3>
        <h4>{ date }</h4>
      </Post>
    )
  })

  return (
    <Layout hasNavigation>
      <SEO title="earn" />
      {
        earnPosts
      }
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const Post = styled.article`
  display: grid;
  grid-template-areas: "title title date"
                       "post post post";
`

export default EarnPage

export const EarnQuery = graphql`
  {
    allMarkdownRemark ( filter: { frontmatter:{ tag: { eq:"earn" } } } ) {  
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
  }
`

