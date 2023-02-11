import { gql } from "@apollo/client"

export const getCharacters = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
