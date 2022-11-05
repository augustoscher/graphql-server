const mongoose = require('mongoose')

const tvSerieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: String,
  director: {
    name: String,
    country: String
  }
})

module.exports = mongoose.model('tvSerie', tvSerieSchema, 'tvSerie')
