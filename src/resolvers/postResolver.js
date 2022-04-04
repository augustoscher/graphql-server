const getPosts = require('../client/scalable')

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
        console.log('term')
        console.log(queryTerm)
        console.log()
        if (queryTerm) {
          console.log('with term')
          return getPosts({ queryTerm })
        }
        console.log('without term')
        return getPosts()
      } catch (error) {
        console.log(error)
        return []
      }
    }
  }
}

module.exports = postResolver
