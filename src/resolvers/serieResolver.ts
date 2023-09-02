import Serie from '../models/series'

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

export default serieResolver
