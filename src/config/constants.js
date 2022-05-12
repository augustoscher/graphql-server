const {
  NODE_ENV = 'development',
  MONGODB_URL = 'mongodb://db:27017/graphql',
  MONGO_USER = 'graphql',
  MONGO_PASSWORD = 'graphql'
} = process.env

module.exports = {
  NODE_ENV,
  MONGODB_URL,
  MONGO_USER,
  MONGO_PASSWORD
}
