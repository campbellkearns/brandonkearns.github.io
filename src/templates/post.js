import React from 'react'
import { graphql } from 'gatsby'

export default function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <section>
      <h2>{frontmatter.title}</h2>
      <h4>{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

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
