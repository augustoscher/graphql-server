import mongoose from "mongoose"
import producerSchema from "./producer"
import directorSchema from "./director"

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: String,
  producers: [producerSchema],
  directors: [directorSchema]
})

export default mongoose.model('movie', movieSchema, 'movie')
