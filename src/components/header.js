import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'

const Header = ({ siteTitle }) => (
  <div>
    <HomeNav>
      <section style={{ flex:1, wordBreak:'break-word' }}>
        <h1>
          { siteTitle }
        </h1>
      </section>
      <div style={{ justifyContent:'flex-end', display:'flex', flex: 1 }}>
        <img src='icons/icon-72x72.png' style= {{ alignSelf:'center' }} />
      </div>
    </HomeNav>
    <Objective>
      <li>learn</li>
      <li>earn</li>
      <li>sojourn</li>
    </Objective>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

const Objective = styled.nav`
  list-style: none;
  display:flex;
  justify-content:space-around;
`

const HomeNav = styled.header`
  display: flex;
  justify-content: space-between;
  max-height: 20vh;
`;


export default Header
