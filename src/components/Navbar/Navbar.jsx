import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="py-4 2xl:px-6">
      <div class="container flex items-center justify-between">
        <Link to={"/"} className=" text-3xl">
          Jubair's BookShop
        </Link>

        <ul class="hidden md:flex items-center space-x-6">
          <Link
            to={"/"}
            class="font-semibold cursor-pointer"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            to={"/addBook"}
            class="cursor-pointer"
            href="AddBook.html"
            id="lws-addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>

        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
