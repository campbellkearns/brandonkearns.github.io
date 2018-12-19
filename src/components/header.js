import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'

const Header = ({ siteTitle }) => (
  <div>
    <Banner>
      <section style={{ flex:1, wordBreak:'break-word' }}>
        <h1>
          { siteTitle }
        </h1>
      </section>
      <div style={{ justifyContent:'flex-end', display:'flex', flex: 1 }}>
        <img src='/icons/icon-72x72.png' style= {{ alignSelf:'center' }} />
      </div>
    </Banner>
    <SectionNav>
      <ul>
        <li>learn</li>
        <li>earn</li>
        <li>sojourn</li>
      </ul>

    </SectionNav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

const SectionNav = styled.nav`
  & ul {
    list-style: none;
    display:flex;
    justify-content:space-around;
  }
`

const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  max-height: 20vh;
`;


export default Header
