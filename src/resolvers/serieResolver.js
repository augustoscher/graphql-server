const Serie = require('../models/series')

const serieResolver = {
  Query: {
    series: async () => {
      return await Serie.find({})
    },
    serie: async (_, { id }) => {
      return await Serie.findById(id)
    }
  },
  Mutation: {
    createSerie: async (_, { serie }) => {
      const newSerie = new Serie(serie)
      return await newSerie.save()
    }
  }
}

module.exports = serieResolver
