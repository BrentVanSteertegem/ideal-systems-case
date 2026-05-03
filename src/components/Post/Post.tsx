import { useEffect, useState } from 'react'
import PostType from '../../types/Post.type'
import PostCommentType from '../../types/PostComment.type'
import getPostComments from '../../helpers/getPostComments'

type PostProps = {
    post: PostType
    setSelectedPostId: (undefined: undefined) => void
}

const Post = ({ post, setSelectedPostId }: PostProps) => {
    const [comments, setComments] = useState<PostCommentType[]>([])

    useEffect(() => {
        const loadComments = async () => {
            try {
            const fetchedComments = await getPostComments(post.id)
            setComments(fetchedComments)
            } catch (error) {
            console.error(error)
            }
        }
        loadComments()
    }, [])

    const onCloseButtonClick = () => {
        setSelectedPostId(undefined)
    }

    return (
        <div>
            <button
                onClick={onCloseButtonClick}
            >Close</button>
            <section>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </section>
            <section>
                <h2>Comments</h2>
                <ul>
                    {comments.map(comment => {
                        return (
                            <li
                                key={comment.id}
                            >{comment.body}</li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Post