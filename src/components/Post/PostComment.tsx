import PostCommentType from '../../types/PostComment.type'

type PostCommentProps = {
    comment: PostCommentType
}

const PostComment = ({ comment }: PostCommentProps) => {
    return (
        <li className='post_comment'>
            <span className='post_comment__avatar'>{comment.name.charAt(0)}</span>
            <p className='post_comment__body'>{comment.body}</p>
        </li>
    )
}

export default PostComment