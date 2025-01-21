import { createSlice } from "@reduxjs/toolkit";

const collegeCourseDataSlice = createSlice({
  name: "collegeCourseData",
  initialState: {},
  reducers: {
    setCollegeCourseData: (state, action) => action.payload,
    clearCollegeCourseData: () => {},
  },
});

export const { setCollegeCourseData, clearCollegeCourseData } = collegeCourseDataSlice.actions;

export default collegeCourseDataSlice.reducer;
