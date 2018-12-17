/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

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

exports.createPages = ({ actions, qraphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post.js')
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
    if(result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug
        }
      })
    });
  })
}
