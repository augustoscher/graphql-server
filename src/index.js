const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

require('./config/database')

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log('Server failed: ', error))
