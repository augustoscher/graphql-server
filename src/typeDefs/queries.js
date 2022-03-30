const { gql } = require('apollo-server');

const query = gql`
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    series: [Serie]
    serie(id: ID!): Serie
  }
`;

module.exports = query;
