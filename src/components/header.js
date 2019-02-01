import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { red } from 'ansi-colors';

const Header = ({ siteTitle, navLinks }) => {

  const linkStyle = {
    textDecoration: 'none'
  }
  return (
    <div>
    <Banner>
      <h1 style={{ 'flexGrow': '2' }}>{ siteTitle }</h1>
      <Link style={{ }}to={"/"}><img src='/icons/icon-72x72.png' style= {{ alignSelf:'center' }} alt="Home"/></Link>
    </Banner>
    { 
      navLinks ?
      <SectionNav>
        {
          navLinks.map(link => (
            <NavLink key={link.name}>
              <Link to={link.link} style={linkStyle} activeStyle={{ color:'red', }}><h4>{link.name}</h4></Link>
            </NavLink>
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
  list-style: none;
  display:flex;
  justify-content:space-around;
  `

const NavLink = styled.li`
  align-content: center;
`

const Banner = styled.header`
  display: flex;
  align-items: center;
`;


export default Header
