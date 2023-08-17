import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            id
            parentId
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return data

}