import getPosts from '../client/scalable'

const postResolver = {
  // make scalablepath api call, to fetch authors and posts
  Query: {
    posts: () => {
      try {
        return getPosts()
      } catch (error) {
        console.log(error)
        return []
      }
    },

    findPosts: (_, { queryTerm }) => {
      try {
        if (queryTerm) return getPosts({ queryTerm })

        return getPosts()
      } catch (error) {
        console.log(error)
        return []
      }
    }
  }
}

export default postResolver
