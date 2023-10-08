import React, { useState } from "react";
import { useAddBookMutation } from "../../featured/apiSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [ImgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const [addBook, { isError, isLoading, data: books, isSuccess, error }] =
    useAddBookMutation();
  const resetForm = () => {
    setAuthorName("");
    setBookName("");
    setImgUrl("");
    setPrice("");
    setRating("");
    setChecked("");
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addBook({
      name: bookName,
      author: authorName,
      thumbnail: ImgUrl,
      price: parseInt(price),
      rating: parseInt(rating),
      featured: checked,
    });
    navigate("/");

    resetForm();
  };
  return (
    <>
      <main class="py-6 2xl:px-6">
        <div class="container">
          {isSuccess && (
            <div className="success-text text-center mb-4 bg-green-500 h-8 w-72 rounded-md">
              Your Book has been added successfully
            </div>
          )}
          {isError && (
            <div className="error-text text-center mb-4 bg-green-500 h-8 w-72 rounded-md">
              Your Book has'nt added On DB
            </div>
          )}

          <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form onSubmit={handleOnSubmit} class="book-form">
              <div class="space-y-2">
                <label for="lws-bookName">Book Name</label>
                <input
                  defaultValue={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  required
                  class="text-input"
                  type="text"
                  id="lws-bookName"
                  name="name"
                />
              </div>

              <div class="space-y-2">
                <label for="lws-author">Author</label>
                <input
                  required
                  class="text-input"
                  type="text"
                  id="lws-author"
                  defaultValue={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  name="author"
                />
              </div>

              <div class="space-y-2">
                <label for="lws-thumbnail">Image Url</label>
                <input
                  required
                  class="text-input"
                  defaultValue={ImgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                />
              </div>

              <div class="grid grid-cols-2 gap-8 pb-4">
                <div class="space-y-2">
                  <label for="lws-price">Price</label>
                  <input
                    required
                    class="text-input"
                    type="number"
                    id="lws-price"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                  />
                </div>

                <div class="space-y-2">
                  <label for="lws-rating">Rating</label>
                  <input
                    required
                    class="text-input"
                    type="number"
                    id="lws-rating"
                    defaultValue={rating}
                    onChange={(e) => setRating(e.target.value)}
                    name="rating"
                    min="1"
                    max="5"
                  />
                </div>
              </div>

              <div class="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  name="featured"
                  class="w-4 h-4"
                />
                <label for="lws-featured" class="ml-2 text-sm">
                  {" "}
                  This is a featured book{" "}
                </label>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                class="submit"
                id="lws-submit"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddBook;
