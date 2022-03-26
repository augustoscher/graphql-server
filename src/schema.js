const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Movie {
    name: String
    year: String
  }

  type Query {
    books: [Book]
    movies: [Movie]
  }
`;

module.exports = typeDefs;
