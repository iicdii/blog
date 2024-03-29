import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: ${(props) => (props.small ? '2em' : '3em')};
  font-weight: 600;
  text-align: center;
  margin: ${(props) => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  word-break: keep-all;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${(props) => props.theme.colors.text};
    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
  }
`

const PageTitle = (props) => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
