const movieResolver = require('./movieResolver')
const serieResolver = require('./serieResolver')
const postResolver = require('./postResolver')

const resolvers = [movieResolver, serieResolver, postResolver]

module.exports = resolvers
