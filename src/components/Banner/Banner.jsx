import React, { useEffect } from "react";
import BookFeatured from "./BookFeatured";
import BookCard from "./BookCard";
import { useGetAllBooksQuery } from "../../featured/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeaturedFilter } from "../../featured/bookSlice";

const Banner = () => {
  const { data: books, isError, isLoading, error } = useGetAllBooksQuery();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(toggleFeaturedFilter(false));
  }, [dispatch]);
  const filterByData = (book) => {
    const { featured } = filter;

    return featured ? book.featured : true;
  };
  const filterBySearch = (book) => {
    const { search } = filter; // Get the search query from Redux state
    return (
      search === "" || book.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterByFeatuered = (book) => {
    dispatch(toggleFeaturedFilter(book));
  };

  const showAllBook = (book) => {
    dispatch(toggleFeaturedFilter(book));
  };

  // const bookToShow = books.filter(filterByFeatuered);

  let content;
  if (isLoading) content = <h1>Loading.......</h1>;
  if (!isLoading && isError) content = <h1>{error}</h1>;
  if (!isLoading && !isError && books?.length === 0) {
    content = <h1>Books Not Found</h1>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(filterByData)
      .filter(filterBySearch)
      ?.map((book) => <BookCard key={book.id} book={book} />);
  }
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <div class="flex items-center justify-between mb-12">
          <h4 class="mt-2 text-xl font-bold">Book List</h4>

          <div class="flex items-center space-x-4">
            <button
              onClick={() => showAllBook(false)}
              class={`lws-filter-btn ${
                filter.featured === false && `active-filter`
              }`}
            >
              All
            </button>
            <button
              onClick={() => filterByFeatuered(true)}
              class={`lws-filter-btn ${
                filter.featured === true && `active-filter`
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Banner;
