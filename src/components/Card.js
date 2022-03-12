import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import dayjs from 'dayjs'

const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: all 200ms ease;
  transform: scale(0.95);
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    flex: ${(props) => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    flex: ${(props) => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    transform: scale(1);
  }

  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 90%;
      z-index: 0;
      @media screen and (min-width: ${(props) =>
          props.theme.responsive.small}) {
        padding-bottom: ${(props) => (props.featured ? '65%' : '90%')};
      }
    }
  }
`

const StyledImg = styled(GatsbyImage)`
  border-radius: 48px;
`

const Title = styled.h2`
  font-size: ${(props) => (props.featured ? '3em' : '1.5em')};
  font-weight: 600;
  margin: 1rem 1rem 0.5rem 1rem;
  word-break: keep-all;
  line-height: 1.25em;
  color: #2d4379;
`

const Space = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    flex-wrap: nowrap;
  }
  column-gap: 36px;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: #7483a9;
`

// const ReadingTime = styled.h4`
//   margin: 0 1rem 1.5rem 1rem;
//   color: gray;
// `

const Excerpt = styled.p`
  margin: 1rem 1rem 1rem 1rem;
  line-height: 1.6;
  color: #7483a9;
`

const ImgBlock = styled.div`
  flex: 1 1 100%;
`

const TitleBlock = styled.div``

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage &&
        body &&
        (props.featured ? (
          <Post featured={props.featured}>
            <Link to={`${props.basePath}/${slug}/`}>
              <Space>
                <ImgBlock>
                  <StyledImg
                    image={heroImage.gatsbyImageData}
                    backgroundColor={'#eeeeee'}
                    alt={heroImage.title}
                  />
                </ImgBlock>
                <TitleBlock>
                  <Title featured={props.featured}>{title}</Title>
                  <Date>{dayjs(publishDate).format('YY.MM.DD')}</Date>
                  <Excerpt
                    dangerouslySetInnerHTML={{
                      __html: body.childMarkdownRemark.excerpt.replace('목차', ''),
                    }}
                  />
                </TitleBlock>
              </Space>
            </Link>
          </Post>
        ) : (
          <Post featured={props.featured}>
            <Link to={`${props.basePath}/${slug}/`}>
              <StyledImg
                image={heroImage.gatsbyImageData}
                backgroundColor={'#eeeeee'}
                alt={heroImage.title}
              />
              <Title>{title}</Title>
              <Date>{dayjs(publishDate).format('YY.MM.DD')}</Date>
              <Excerpt
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.excerpt,
                }}
              />
            </Link>
          </Post>
        ))}
    </>
  )
}

export default Card
