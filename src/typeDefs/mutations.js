const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createMovie(movie: MovieInput): Movie
    updateMovie(id: String, movie: MovieInput): Movie
    deleteMovie(id: String): Movie
  }
  input MovieInput {
    name: String
    year: String
    director: DirectorInput
    producers: [ProducerInput]
  }
  input DirectorInput {
    name: String!
    country: String
  }
  input ProducerInput {
    name: String!
  }
`;

module.exports = mutation;
