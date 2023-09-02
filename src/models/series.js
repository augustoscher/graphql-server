const mongoose = require('mongoose')
const producerSchema = require('./producer')
const directorSchema = require('./director')

const tvSerieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: String,
  producers: [producerSchema],
  directors: [directorSchema]
})

module.exports = mongoose.model('tvSerie', tvSerieSchema, 'tvSerie')
