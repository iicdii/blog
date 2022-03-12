import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Icon from '../icons/Icon';
import logo from '../../static/images/blog_logo.png'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  padding: 1em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth};
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
          color: ${(props) => props.theme.colors.highlight};
          background-color: rgba(91, 139, 247, 0.08);
          border-radius: 24px;
        }
        &:active {
          color: #fff;
          background-color: ${(props) => props.theme.colors.highlight};
          border-radius: 24px;
        }
      }
      a.has-icon {
        padding: 16px 12px 8px 12px;
      }
    }
  }
`

const Logo = styled.img`
  width: 100px;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    width: 150px;
  }
`

const activeLinkStyle = {
  backgroundColor: 'rgba(91, 139, 247, 0.08)',
  color: '#5b8bf7',
  borderRadius: '24px',
}

const MenuItem = ({ link }) => {
  if (link.url) {
    return (
      <li>
        <a
          href={link.url}
          className={link.icon ? 'has-icon' : ''}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          {link.icon ? <Icon name={link.icon} /> : link.name}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={link.slug} activeStyle={activeLinkStyle} className={link.icon ? 'has-icon' : ''}>
        {link.icon ? <Icon name={link.icon} /> : link.name}
      </Link>
    </li>
  );
};

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
          {menuLinks.slice(1).map((link) => (
            <MenuItem key={link.name} link={link} />
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
