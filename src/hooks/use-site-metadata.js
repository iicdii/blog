import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            menuLinks {
              name
              icon
              url
              slug
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
