import Post from '../types/Post.type'

const getPosts = async (): Promise<Post[]> => {
    if (!process.env.REACT_APP_POSTS_BASE_URL) throw new Error('Get posts endpoint not set')
    try {
        const response = await fetch(process.env.REACT_APP_POSTS_BASE_URL)
        const result = await response.json()
        return result as Post[]
    } catch (error) {
        throw error
    }
}

export default getPosts