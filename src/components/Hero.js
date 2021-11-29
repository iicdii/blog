import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`

const BgImg = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
`

// const Title = styled.h1`
//   z-index: 2;
//   font-size: 3em;
//   font-weight: 600;
//   position: absolute;
//   width: 100%;
//   max-width: ${props => props.theme.sizes.maxWidthCentered};
//   padding: 0 1rem;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: white;
//   word-break: keep-all;
//   line-height: 4rem;
// `

const Hero = props => (
  <Wrapper height={props.height}>
    <BgImg image={props.image.gatsbyImageData} alt={props.image.title} />
  </Wrapper>
)

export default Hero
