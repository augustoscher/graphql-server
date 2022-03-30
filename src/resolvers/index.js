const movieResolver = require('./movieResolver');
const serieResolver = require('./serieResolver');

const resolvers = [movieResolver, serieResolver];

module.exports = resolvers;
