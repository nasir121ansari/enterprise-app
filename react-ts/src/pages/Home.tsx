import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState, AppDispatch } from '../app/store'
import { fetchPosts } from '../features/posts/postsSlice'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>() 
  const posts = useSelector((state: RootState) => state.posts.items)
  const loading = useSelector((state: RootState) => state.posts.loading)
  const error = useSelector((state: RootState) => state.posts.error)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
