import mongoose from "mongoose"
import producerSchema from "./producer"
import directorSchema from "./director"

const tvSerieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: String,
  producers: [producerSchema],
  directors: [directorSchema]
})

export default mongoose.model('tvSerie', tvSerieSchema, 'tvSerie')
