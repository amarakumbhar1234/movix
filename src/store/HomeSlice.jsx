import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigration, getGenres } = HomeSlice.actions;

export default HomeSlice.reducer;
