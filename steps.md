### BACKEND

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

### FRONTEND

So we have 3 links here, for 3 pages that I already develops. And now we have to fetch our TV Series from GraphQL endpoint inside Series page.

- So let's start creating ou graphql query for series:

```js
const { gql } = require('@apollo/client');

const SERIE_QUERY = gql`
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
`;

export default SERIE_QUERY;
```

- To avoid code duplication, we could create an custom hook to fetch data and reuse in each page. So let's do it:

Let's create custom hook:

```js
import { useState, useEffect } from 'react';
import client from '../../graphql/index';

const useFetch = ({ initialQuery, initialData }) => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await client.query({ query });

        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, isLoading, isError, doFetch: setQuery };
};

export default useFetch;
```

- Now, we can use `useFetch` hook in Movies and Series page:

- TV Series page:
```js
import Base from '../../templates/Base';
import useFetch from 'hooks/UseFetch';
import SERIE_QUERY from 'graphql/queries/series';
import List, { ListItem } from '../../components/List';

import * as S from './styles';

const Series = () => {
  const { data, isLoading, isError } = useFetch({
    initialQuery: SERIE_QUERY,
    initialData: [],
  });

  const { series = [] } = data;

  return (
    <Base>
      <h1>Series</h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <List>
          {series.map((item) => (
            <ListItem key={item.id}>
              <S.Title>
                {item.name} • {item.year}
              </S.Title>
              <S.Director>
                Directed by: {item.director.name} - {item.director.country}
              </S.Director>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default Series;
```

- Movies page:

```js
import Base from '../../templates/Base';
import useFetch from 'hooks/UseFetch';
import List, { ListItem } from '../../components/List';
import MOVIE_QUERY from 'graphql/queries/movies';

import * as S from './styles';

const Movies = () => {
  const { data, isLoading, isError } = useFetch({
    initialQuery: MOVIE_QUERY,
    initialData: [],
  });

  const { movies = [] } = data;

  return (
    <Base>
      <h1>Movies</h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <List>
          {movies.map((item) => (
            <ListItem key={item.id}>
              <S.Title>
                {item.name} • {item.year}
              </S.Title>
              <S.Director>
                Directed by: {item.director.name} - {item.director.country}
              </S.Director>
              <S.Producers>
                Produced by:{' '}
                {item.producers.map((prod, idx) => (
                  <span key={idx}>
                    {prod.name}
                    {idx < item.producers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </S.Producers>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default Movies;
```
