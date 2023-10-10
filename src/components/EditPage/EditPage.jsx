import React from "react";
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../../featured/apiSlice";
import EditForm from "./EditForm";

const EditPage = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError, error } = useSingleBookQuery(bookId);

  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && book?.id) {
    content = <EditForm book={book} />;
  }
  return (
    <>
      <main class="py-6 2xl:px-6">
        <div class="container">
          <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
            {content}
          </div>
        </div>
      </main>
    </>
  );
};

export default EditPage;
