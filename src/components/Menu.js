import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid transparent;
    &:hover {
      color: ${props => props.theme.colors.highlight};
      border-bottom: 2px solid ${props => props.theme.colors.highlight};
    }
  }
`

const activeLinkStyle = {
  color: '#5b8bf7',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
