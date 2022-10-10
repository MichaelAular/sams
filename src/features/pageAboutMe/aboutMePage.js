import { createSlice } from "@reduxjs/toolkit";

export const aboutMePageSlice = createSlice({
  name: "aboutMe",
  initialState: {
    value: true
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse, } = aboutMePageSlice.actions;

export default aboutMePageSlice.reducer;
