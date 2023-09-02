const mongoose = require('mongoose')

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false
  }
})

module.export = producerSchema
