const { gql } = require("apollo-server");

const query = gql`
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

module.exports = query;
