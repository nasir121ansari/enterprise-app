import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../app/store'
import { fetchPosts } from '../features/posts/postsSlice'
import { useEffect } from 'react'

const Post = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>() 
  const post = useSelector((state: RootState) =>
    state.posts.items.find(post => post.id === Number(id))
  )

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts())
    }
  }, [dispatch, post])

  if (!post) return <p>Loading...</p>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
