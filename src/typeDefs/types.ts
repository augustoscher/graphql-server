import { gql } from 'apollo-server'

const types = gql`
  type Movie {
    id: ID!
    name: String!
    year: String
    director: [Director]
    producers: [Producer]
  }
  type Serie {
    id: ID!
    name: String!
    year: String
    directors: [Director]
  }
  type Post {
    id: ID
    title: String
    author: String
    body: String
  }
  type Director {
    name: String!
    country: String
  }
  type Producer {
    name: String!
    country: String
  }
`

export default types
