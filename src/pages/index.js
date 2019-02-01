import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

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
      <Post key={id}>
        <h3><Link to={fields.slug} className="post-title">{ title }</Link></h3>
        <h4 className="post-date">{ date }</h4>
        <p>{ excerpt }</p>
      </Post>
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

const Post = styled.article`
  display: grid;
  grid-template-areas: "title title date"
                       "post post post";
`

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
