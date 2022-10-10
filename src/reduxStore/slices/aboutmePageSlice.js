import { createSlice } from '@reduxjs/toolkit'

const aboutmePageSlice = createSlice({
  name: 'aboutmePage',
  initialState: [],
  reducers: {
    aboutmePageOpen(state, action) {
     state = true
     },
    aboutmePageClose(state, action) {
        state  = false
       },
  }
})

export const { aboutmePageClose, aboutmePageOpen } = aboutmePageSlice.actions
export default aboutmePageSlice.reducer 