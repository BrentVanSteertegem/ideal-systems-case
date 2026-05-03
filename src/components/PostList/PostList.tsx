import PostType from '../../types/Post.type'
import PostListItem from './PostListItem'

type PostListProps = {
    posts: PostType[]
    setSelectedPostId: (postId: number) => void
}

const PostList = ({ posts, setSelectedPostId }: PostListProps) => {
    return (
        <ul>
            { posts.map(post => 
                <PostListItem 
                    key={post.id}
                    post={post}
                    setSelectedPostId={setSelectedPostId}
                />
            )}
        </ul>
    )
}

export default PostList