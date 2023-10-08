import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import EditPage from "./components/EditPage/EditPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/addBook" element={<AddBook />}></Route>
          <Route path="/editBook" element={<EditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
