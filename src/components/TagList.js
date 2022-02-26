import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: 24px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 0.85em;
    padding: 8px 12px;
    &:hover {
      background: ${(props) => props.theme.colors.secondary};
    }
  }
`

const TagList = (props) => {
  return (
    <List>
      {props.tags.map((tag) => (
        <Tag key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
