- Add serie in type definition:

```gql
type Serie {
  id: ID!
  name: String!
  year: String
  director: Director
}
```

- Add series and serie in queries definition

```js
const query = gql`
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    series: [Serie]
    serie(id: ID!): Serie
  }
`;
```

- Add serie mutation definition

```gql
createSerie(serie: SerieInput): Serie
input SerieInput {
  name: String
  year: String
  director: DirectorInput
}
```

- Add a new resolver to handle with series

```js
const Serie = require('../models/series');

const serieResolver = {
  Query: {
    series: async () => {
      return await Serie.find({});
    },
    serie: async (_, { id }) => {
      return await Serie.findById(id);
    },
  },
  Mutation: {
    createSerie: async (_, { serie }) => {
      const newSerie = new Serie(serie);
      return await newSerie.save();
    },
  },
};

module.exports = serieResolver;
```

- Export the new resolver on index of resolvers

```js
const movieResolver = require('./movieResolver');
const serieResolver = require('./serieResolver');

const resolvers = [movieResolver, serieResolver];

module.exports = resolvers;
```

- I think, we finished graphql server part. Let's test it by creating a mutation and query:

```gql
mutation CreateSerie {
  createSerie(
    serie: {
      name: "Breaking Bad"
      year: "2008"
      director: { name: "Vince Gilligan", country: "United States" }
    }
  ) {
    name
    year
    director {
      name
      country
    }
  }
}
```

```gql
query SerieQuery {
  series {
    id
    name
    year
    director {
      name
      country
    }
  }
}
```

So now that our graphql server is working, let's go to frontend.

So we have 3 links here, for 3 pages that I already develops. And now we have to fetch our TV Series from GraphQL endpoint inside Series page.

To avoid code duplication, we could create an custom hook to fetch data. So let's do it:

```js

```
