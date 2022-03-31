const movieResolver = require('./movieResolver');
const postResolver = require('./postResolver');

const resolvers = [movieResolver, postResolver];

module.exports = resolvers;
