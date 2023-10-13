import { createSlice } from "@reduxjs/toolkit";
import { useGetAllBooksQuery } from "./apiSlice";

const initialState = {
  search: "",
  featured: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleFeaturedFilter: (state, action) => {
      state.featured = action.payload;
    },
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});
export default bookSlice.reducer;
export const { toggleFeaturedFilter, searchFilter } = bookSlice.actions;
