import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
  gap: 0.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${(props) => props.theme.colors.text};
    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
    &:visited {
      color: ${(props) => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://github.com/iicdii"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </Item>
      <Item>
        <a
          href="https://medium.com/@harimkims"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Medium
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
