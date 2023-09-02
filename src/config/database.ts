import Serie from "../models/series"
import series from '../static/series.json'

import mongoose from "mongoose"
import { MONGODB_URL, MONGO_USER, MONGO_PASSWORD, NODE_ENV } from "./constants"

const defaultConfig = {
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const devConfig = {
  ...defaultConfig,
  authSource: 'admin'
}

const populateDatabase = async () => {
  const count = await Serie.countDocuments({}).exec()
  if (count === 0) {
    console.log('Populating TV Series')
    const newSeries = series.map((doc) => new Serie(doc))
    Serie.bulkSave(newSeries)
    console.log('TV Series finished')
  }
}

module.exports = mongoose
  .connect(MONGODB_URL, NODE_ENV === 'development' ? devConfig : defaultConfig)
  .then(() => {
    console.log('Database connected')
    populateDatabase()
  })
  .catch((error) => console.log('Databased failed: ', error))
