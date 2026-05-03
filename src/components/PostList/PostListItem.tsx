import PostType from '../../types/Post.type'

type PostListItemProps = {
    post: PostType
    setSelectedPostId: (postId: number) => void
}

const PostListItem = ({ post, setSelectedPostId }: PostListItemProps) => {
    const onViewButtonClick = () => {
        setSelectedPostId(post.id)
    }

    return (       
        <li className='post_list_item'>
            <span>{post.title}</span>
            <button
                onClick={onViewButtonClick}
            >View</button>
        </li>
    )
}

export default PostListItem