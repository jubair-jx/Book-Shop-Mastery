import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../featured/apiSlice";
import bookSlice from "../featured/bookSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    bookReducer: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
