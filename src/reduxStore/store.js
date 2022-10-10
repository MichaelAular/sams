import { configureStore } from '@reduxjs/toolkit'
import aboutmePageReducer from './slices/aboutmePageSlice'

export const store = configureStore({
  reducer: {
    aboutmePage: aboutmePageReducer
  }
})