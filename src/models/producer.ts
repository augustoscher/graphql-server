import mongoose from "mongoose"

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

export default producerSchema
