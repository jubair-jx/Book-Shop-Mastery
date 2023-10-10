import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookFeatured = () => {
  const { books } = useSelector((state) => state.bookReducer);

  const dispatch = useDispatch();
  const handleFeaturedBooks = (filter) => {};
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
