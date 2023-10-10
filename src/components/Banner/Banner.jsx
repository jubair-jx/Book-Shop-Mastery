import React from "react";
import BookFeatured from "./BookFeatured";
import BookCard from "./BookCard";
import { useGetAllBooksQuery } from "../../featured/apiSlice";

const Banner = () => {
  const { data: books, isError, isLoading, error } = useGetAllBooksQuery();

  let content;
  if (isLoading) content = <h1>Loading.......</h1>;
  if (!isLoading && isError) content = <h1>{error}</h1>;
  if (!isLoading && !isError && books?.length === 0) {
    content = <h1>Books Not Found</h1>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books?.map((book) => <BookCard book={book} key={book.id} />);
  }
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <div class="flex items-center justify-between mb-12">
          <h4 class="mt-2 text-xl font-bold">Book List</h4>

          <BookFeatured />
        </div>
        <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Banner;
