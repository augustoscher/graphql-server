const axios = require('axios');

const DEFAULT_TIMEOUT = 1000 * 10; // Wait for 10s
const POSTS_URL = 'https://www.scalablepath.com/api/test/test-posts';
const AUTHOR_URL = 'https://www.scalablepath.com/api/test/test-users';

const fetchPosts = () => axios.get(POSTS_URL, { timeout: DEFAULT_TIMEOUT });

const fetchAuthors = () => axios.get(AUTHOR_URL, { timeout: DEFAULT_TIMEOUT });

const postResolver = {
  Query: {
    posts: async () => {
      // make scalablepath api call, to fetch authors and posts
      try {
        const postsResponse = await fetchPosts();
        const authorsResponse = await fetchAuthors();

        const posts = postsResponse.data;
        const authors = authorsResponse.data;

        const mapped = posts.map((post) => {
          const { name } = authors.find((author) => author.id === post.userId);

          return {
            id: post.id,
            author: name,
            title: post.title,
            body: post.body,
          };
        });

        return mapped;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
};

module.exports = postResolver;
