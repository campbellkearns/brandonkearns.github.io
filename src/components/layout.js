import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, hasNavigation }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
      { 
        hasNavigation ?
        <Header hasNavigation siteTitle={data.site.siteMetadata.title} navLinks={data.site.siteMetadata.navLinks} /> :
        <Header siteTitle={data.site.siteMetadata.title} />
      }
        
          {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
