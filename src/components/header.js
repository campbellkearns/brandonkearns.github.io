import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle, navLinks }) => {

  const linksStyle = {
    textDecoration: 'none'
  }
  return (
    <div>
    <Banner>
      <section style={{ flex:1, wordBreak:'break-word' }}>
        <h1>
          { siteTitle }
        </h1>
      </section>
      <div style={{ justifyContent:'flex-end', display:'flex', flex: 1 }}>
        <Link to={"/"}><img src='/icons/icon-72x72.png' style= {{ alignSelf:'center' }} alt="Home"/></Link>
      </div>
    </Banner>
    { navLinks ?
      <SectionNav>
        {
          navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link} style={linksStyle}>{link.name}</Link>
            </li>
          ))
        }
      </SectionNav> :
      null
    }
  </div>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

const SectionNav = styled.nav`
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  display:flex;
  justify-content:space-around;
`

const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  max-height: 20vh;
`;


export default Header
