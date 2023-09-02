const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false
  }
})

module.exports = directorSchema
