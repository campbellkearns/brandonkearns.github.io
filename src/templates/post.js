import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout';

export default function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <PostHeader>
        <h2>{frontmatter.title}</h2>
        <h3>{frontmatter.date}</h3>
      </PostHeader>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

const PostHeader = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
`

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`
