import { useEffect, useState } from 'react'
import PostList from './components/PostList/PostList'
import getPosts from './helpers/getPosts'
import Post from './types/Post.type'

const App = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const loadPosts = async () => {
          try {
            const fetchedPosts = await getPosts()
            setPosts(fetchedPosts)
          } catch (error) {
            console.error(error)
          }
        }
        loadPosts()
    }, [])

  return (
    <PostList 
      posts={posts}
    />
  )
}

export default App