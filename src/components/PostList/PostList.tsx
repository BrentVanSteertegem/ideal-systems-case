import { useState } from 'react'
import PostType from '../../types/Post.type'
import PostListItem from './PostListItem'

type PostListProps = {
    posts: PostType[]
    setSelectedPostId: (postId: number) => void
}

const PostList = ({ posts, setSelectedPostId }: PostListProps) => {
    const [search, setSearch] = useState<string>('')
    
    const filteredPosts: PostType[] = search !== ''
        ? posts.filter(post => post.title
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        : posts

    const renderPostListItem = (post: PostType) => {
        return (
            <PostListItem 
                key={post.id}
                post={post}
                setSelectedPostId={setSelectedPostId}
            />
        )
    }

    return (
        <div>
            <input
                type='text'
                placeholder='search post titles'
                onChange={e => setSearch(e.target.value.trim())}
            />
            <ul>
                {filteredPosts.map(renderPostListItem)}
            </ul>
        </div>
    )
}

export default PostList