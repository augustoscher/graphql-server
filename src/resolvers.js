const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const movies = [
  {
    name: "Breaking Bad",
    year: "2013",
  },
  {
    name: "Peaky Blinders",
    year: "2017",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    movies: () => movies,
  },
};

module.exports = resolvers;
