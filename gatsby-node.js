const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let slug

  if(node.internal.type==='MarkdownRemark') {
    slug = `/${_.kebabCase(node.frontmatter.title)}`
  }

  createNodeField({
    node,
    name: 'slug',
    value: slug
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            } 
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug
        },
      })
    })
  })
}