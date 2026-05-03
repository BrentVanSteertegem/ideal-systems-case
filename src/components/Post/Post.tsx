import { useEffect, useState } from 'react'
import PostType from '../../types/Post.type'
import PostCommentType from '../../types/PostComment.type'
import getPostComments from '../../helpers/getPostComments'
import Loader from '../Loader/Loader'
import PostComment from './PostComment'

type PostProps = {
    post: PostType
    setSelectedPostId: (undefined: undefined) => void
}

const Post = ({ post, setSelectedPostId }: PostProps) => {
    const [comments, setComments] = useState<PostCommentType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const loadComments = async () => {
            try {
                const fetchedComments = await getPostComments(post.id)
                setComments(fetchedComments)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        loadComments()
    }, [])

    const onCloseButtonClick = () => {
        setSelectedPostId(undefined)
    }

    const renderComments = () => {
        if (comments.length === 0) return (
            <p>No comments for this post yet.<br/>Please check again later!</p>
        )

        return (
            <ul className='post_comments__list'>
                {comments.map(comment => {
                    return (
                        <PostComment
                            key={comment.id}
                            comment={comment}
                        />
                    )
                })}
            </ul>
        )
    }

    return (
        <div>
            <button
                onClick={onCloseButtonClick}
            >Close</button>
            <section className='post'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </section>
            <section className='post_comments'>
                <h2>Comments</h2>
                {isLoading
                    ? <Loader loadingText='Loading comments..'/>
                    : renderComments()
                }
            </section>
        </div>
    )
}

export default Post