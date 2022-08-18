const axios = require('axios')

const DEFAULT_TIMEOUT = 1000 * 10 // Wait for 10s
const POSTS_URL = 'https://www.scalablepath.com/api/test/test-posts'
const AUTHOR_URL = 'https://www.scalablepath.com/api/test/test-users'

const fetchPosts = () => axios.get(POSTS_URL, { timeout: DEFAULT_TIMEOUT })
const fetchAuthors = () => axios.get(AUTHOR_URL, { timeout: DEFAULT_TIMEOUT })

const getPosts = async (params = {}) => {
  const { queryTerm } = params

  const [postsResponse, authorsResponse] = await Promise.all([
    fetchPosts(),
    fetchAuthors()
  ])

  const posts = postsResponse.data
  const authors = authorsResponse.data

  const mapped = posts.map((post) => {
    const { name } = authors.find((author) => author.id === post.userId)

    return {
      id: post.id,
      author: name,
      title: post.title,
      body: post.body
    }
  })

  if (!queryTerm) return mapped

  return mapped.filter((post) => {
    return (
      post.author.includes(queryTerm) ||
      post.title.includes(queryTerm) ||
      post.body.includes(queryTerm)
    )
  })
}

module.exports = getPosts
