const mongoose = require('mongoose');
const { MONGODB_URL, MONGO_USER, MONGO_PASSWORD, NODE_ENV } = require('./constants');

const defaultConfig = {
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const devConfig = {
  ...defaultConfig,
  authSource: 'admin',
};

module.exports = mongoose
  .connect(MONGODB_URL, NODE_ENV === 'development' ? devConfig : defaultConfig)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Databased failed: ', error));
