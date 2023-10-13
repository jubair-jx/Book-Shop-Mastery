import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookFeatured = () => {
  const [filter, setFilter] = useState(false);

  const { books } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilters({ filter }));
  }, [filter, dispatch]);

  return (
    <div class="flex items-center space-x-4">
      <button
        onClick={() => setFilter(false)}
        class="lws-filter-btn active-filter"
      >
        All
      </button>
      <button onClick={() => setFilter(true)} class="lws-filter-btn">
        Featured
      </button>
    </div>
  );
};

export default BookFeatured;
