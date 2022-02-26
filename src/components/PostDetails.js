import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const RightSpace = styled.span`
  margin: 0 0.5rem 0 0 !important;
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  padding: 0;
  word-break: keep-all;
  line-height: 3.2rem;
  margin: 0 0 1rem 0;
`

const PostDetails = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Date>
        📅
        <RightSpace />
        {dayjs(props.date).format('YY.MM.DD')}
      </Date>
      <span>•</span>
      <ReadingTime>
        ⏱<RightSpace />
        {`${props.timeToRead} min read`}
      </ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
