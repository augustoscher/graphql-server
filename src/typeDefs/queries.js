const { gql } = require('apollo-server');

const query = gql`
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    posts: [Post]
  }
`;

module.exports = query;
