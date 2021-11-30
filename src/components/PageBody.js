import React from 'react'
import styled from '@emotion/styled'
import 'prismjs/themes/prism.css'
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1.125em;
  }
  h4, h5, h6 {
    margin: 0 0 0.5rem 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 0.5em 0;
  }

  ul {
    li {
      list-style: inside none decimal;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: inside none decimal;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
