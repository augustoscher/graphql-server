const Movie = require('../models/movie');

const movieResolver = {
  Query: {
    movies: async () => {
      return await Movie.find({});
    },
    movie: async (_, { id }) => {
      return await Movie.findById(id);
    },
  },
  Mutation: {
    createMovie: async (_, { movie }) => {
      const newMovie = new Movie(movie);
      return await newMovie.save();
    },
    updateMovie: async (_, { id, movie }) => {
      return await Movie.findByIdAndUpdate(id, movie, {
        new: true,
      });
    },
    deleteMovie: async (_, { id }) => {
      return await Movie.findByIdAndRemove(id);
    },
  },
};

module.exports = movieResolver;
