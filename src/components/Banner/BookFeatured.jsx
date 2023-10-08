import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBooks, setFilter } from "../../featured/bookSlice";

const BookFeatured = () => {
  const { jobs } = useSelector((state) => state.bookReducer);
  // console.log(jobs);
  const dispatch = useDispatch();
  const handleFeaturedBooks = (filter) => {
    dispatch(setFilter(filter));
    dispatch(filterBooks(filter));
  };
  return (
    <div class="flex items-center space-x-4">
      <button
        onClick={() => handleFeaturedBooks(false)}
        class="lws-filter-btn active-filter"
      >
        All
      </button>
      <button onClick={() => handleFeaturedBooks(true)} class="lws-filter-btn">
        Featured
      </button>
    </div>
  );
};

export default BookFeatured;
