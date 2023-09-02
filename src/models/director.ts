import mongoose from "mongoose"

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

export default directorSchema
