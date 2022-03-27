const mongoose = require("mongoose");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: String,
  producers: [producerSchema],
  director: {
    name: String,
    country: String,
  },
});

module.exports = mongoose.model("movie", movieSchema, "movie");
