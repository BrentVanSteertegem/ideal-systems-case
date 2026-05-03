import { useEffect, useState } from 'react'
import PostList from './components/PostList/PostList'
import getPosts from './helpers/getPosts'
import PostType from './types/Post.type'
import Post from './components/Post/Post'

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [selectedPostId, setSelectedPostId] = useState<number | undefined>()
  const selectedPost: PostType | undefined = selectedPostId ? posts.find(post => post.id === selectedPostId) : undefined

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

  const renderPostDetail = () => {
    return (
      <Post
          post={selectedPost!}
        />
    )
  }

  const renderPostList = () => {
    return (
      <PostList 
        posts={posts}
        setSelectedPostId={setSelectedPostId}
      />
    )
  }

  return (
    <div>
      { selectedPost
        ? renderPostDetail()
        : renderPostList()
      }
    </div>
  )
}

export default App