import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../../static/images/blog_logo.png'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 1em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  font-size: 14px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      display: inline-flex;
      margin: 0;
      flex-basis: 100%;
    }
    &:not(:first-of-type) {
      a {
        text-decoration: none;
        color: #6978a0;
        font-weight: 600;
        padding: 8px 16px;
        &:hover {
          color: ${props => props.theme.colors.highlight};
          background-color: rgba(91, 139, 247, 0.08);
          border-radius: 24px;
        }
        &:active {
          color: #fff;
          background-color: ${props => props.theme.colors.highlight};
          border-radius: 24px;
        }
      } 
    }
  }
`

const Logo = styled.img`
  width: 100px;
  
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 150px;
  }
`;

const activeLinkStyle = {
  backgroundColor: 'rgba(91, 139, 247, 0.08)',
  color: '#5b8bf7',
  borderRadius: '24px',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          <li key={menuLinks[0].name}>
            <Link to={menuLinks[0].slug}>
              <Logo src={logo} alt="logo" />
            </Link>
          </li>
          {menuLinks.slice(1).map(link => (
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
