import PostType from '../../types/Post.type'

type PostProps = {
    post: PostType
    setSelectedPostId: (undefined: undefined) => void
}

const Post = ({ post, setSelectedPostId }: PostProps) => {
    const onCloseButtonClick = () => {
        setSelectedPostId(undefined)
    }

    return (
        <div>
            <button
                onClick={onCloseButtonClick}
            >Close</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post