import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.primary};
    color: white;
    font-size: 0.9em;
    padding: 0.8rem 1rem;
    border-radius: 24px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`${props.basePath}/${props.previous.slug}/`}>
            &#8592; Prev
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`${props.basePath}/${props.next.slug}/`}>
            Next &#8594;
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
