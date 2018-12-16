import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <h1>brandon kearns</h1>
    <ul>
      <li>learn</li>
      <li>earn</li>
      <li>sojourn</li>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
