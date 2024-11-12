import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Post } from '../../types'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  } catch (error) {
    return rejectWithValue('Failed to fetch posts')
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [] as Post[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default postsSlice.reducer
