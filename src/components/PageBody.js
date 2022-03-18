import React from 'react'
import styled from '@emotion/styled'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.css'
import 'prism-themes/themes/prism-material-dark.css'

const Body = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
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
  h4,
  h5,
  h6 {
    margin: 0 0 0.5rem 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1em 0;
  }

  a {
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
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
    padding-left: 2em;
    margin: 0 0 0.5em 0;
  }
  
  ul ul {
    padding-left: 2em;
    margin: 0;
  }
  
  ul {
    li {
      list-style-position: outside;
      list-style-image: none;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style-position: outside;
      list-style-image: none;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${(props) => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${(props) => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
  }

  table {
    text-indent: 0;
    border-color: rgb(148 163 184);
    border-collapse: collapse;
    border-width: 1px;
    width: 100%;
    margin-bottom: 10px;
  }

  thead {
    background-color: rgb(248, 250, 252);
  }

  tr {
    box-sizing: border-box;
  }

  th {
    border: 1px solid rgb(203, 213, 225);
    padding: 1rem;
  }

  td {
    border-left: 1px solid rgb(203, 213, 225);
    border-bottom: 1px solid rgb(203, 213, 225);
    border-right: 1px solid rgb(203, 213, 225);
    padding: 1rem;
    color: rgb(100, 116, 139);
  }
  
  .token.deleted {
    text-decoration: none;
  }
  .token.inserted {
    border: none;
  }
  
  & :not(pre) > code[class*="language-"] {
    background: rgba(175, 184, 193, .2);
    color: #ff6666;
    margin: 0 0.1em;
  }
  
  code[class*=language-], pre[class*=language-] {
    font-family: Fira Code,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  }
  
  .table-of-contents {
    margin-bottom: 1rem;
  }
  
  .gatsby-highlight-code-line {
    background-color: #022a4b;
    margin-right: -1.2em;
    margin-left: -1em;
    padding-right: 0.5em;
    padding-left: 0.75em;
    border-left: 0.25em solid #0687f0;
  }
`

const PageBody = (props) => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
