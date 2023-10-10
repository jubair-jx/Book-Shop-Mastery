import React, { useState } from "react";
import { useEditBookMutation } from "../../featured/apiSlice";
import { useNavigate } from "react-router-dom";

const EditForm = ({ book }) => {
  const [editBook, { isLoading, isError, isSuccess, error }] =
    useEditBookMutation();
  const navigate = useNavigate();
  const {
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
    id,
  } = book || {};
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: { name, author, thumbnail, price, rating, featured },
    });
    navigate("/");
    resetForm();
  };
  return (
    <>
      {isSuccess && (
        <div className="success-text text-center mb-4 bg-green-500 h-8 w-72 rounded-md">
          Your Book has been Updated successfully
        </div>
      )}
      {isError && (
        <div className="error-text text-center mb-4 bg-green-500 h-8 w-72 rounded-md">
          Your Book has'nt Updated On DB
        </div>
      )}
      <form onSubmit={handleOnSubmit} class="book-form">
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            required
            defaultValue={name}
            class="text-input"
            type="text"
            onChange={(e) => setName(e.target.value)}
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
            defaultValue={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="lws-author"
            name="author"
          />
        </div>

        <div class="space-y-2">
          <label for="lws-thumbnail">Image Url</label>
          <input
            required
            class="text-input"
            defaultValue={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
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
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={price}
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
              name="rating"
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              defaultValue={rating}
            />
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            onChange={(e) => setFeatured(e.target.checked)}
            defaultChecked={featured}
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
          Edit Book
        </button>
      </form>
    </>
  );
};

export default EditForm;
