const { gql } = require('apollo-server');

const types = gql`
  type Movie {
    id: ID!
    name: String!
    year: String
    director: Director
    producers: [Producer]
  }
  type Serie {
    id: ID!
    name: String!
    year: String
    director: Director
  }
  type Director {
    name: String
    country: String
  }
  type Producer {
    name: String!
  }
`;

module.exports = types;
