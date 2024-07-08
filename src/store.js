import { configureStore } from '@reduxjs/toolkit'
import activeChatSlice from './slice/activeChatSlice'

export default configureStore({
  reducer: {
    activeChat : activeChatSlice
  },
})