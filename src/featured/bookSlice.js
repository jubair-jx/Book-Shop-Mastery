import { createSlice } from "@reduxjs/toolkit";
import { useGetAllBooksQuery } from "./apiSlice";

const initialState = {
  search: "",
  filter: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});
export default bookSlice.reducer;
export const {} = bookSlice.actions;
