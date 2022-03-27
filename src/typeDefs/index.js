const query = require('./queries');
const mutation = require('./mutations');
const types = require('./types');

const typeDefs = [query, mutation, types];

module.exports = typeDefs;
