import Post from '../../types/Post.type'

type PostListProps = {
    posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
    const renderPostListItem = (post: Post) => {
        return (
            <li
                key={post.id}
            >{post.title}</li>
        )
    }

    return (
        <ul>
            {posts.map(renderPostListItem)}
        </ul>
    )
}

export default PostList