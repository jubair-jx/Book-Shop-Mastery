import { createSlice } from "@reduxjs/toolkit";
import { useGetAllBooksQuery } from "./apiSlice";
const initialState = {
  books: [],
  isError: false,
  isLoading: false,
  error: "",
  selectedFilter: false,
  filterBooks: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    filterBooks: (state, action) => {
      const filter = action.payload;
      if (filter === false) {
        state.filterBooks = state.books;
      } else {
        state.filterBooks = state.books.filter(
          (book) => book.featured === filter
        );
      }
    },
    extraReducers: (builder) => {
      builder.addCase(useGetAllBooksQuery.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
      builder.addCase(useGetAllBooksQuery.fulfilled, (state, action) => {
        console.log("fullfilled", action);
        state.books = action.payload;
        state.isLoading = false;
        state.isError = false;
      });
      builder.addCase(useGetAllBooksQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
    },
  },
});
export default bookSlice.reducer;
export const { filterBooks, setFilter } = bookSlice.actions;
