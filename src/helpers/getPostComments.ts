import PostCommentType from '../types/PostComment.type'

const getPostComments = async (postId: number): Promise<PostCommentType[]> => {
    if (!process.env.REACT_APP_POSTS_BASE_URL) throw new Error('Get posts endpoint not set')
    try {
        const response = await fetch(`${process.env.REACT_APP_POSTS_BASE_URL}/${postId}/comments`)
        const result = await response.json()
        return result as PostCommentType[]
    } catch (error) {
        throw error
    }
}

export default getPostComments