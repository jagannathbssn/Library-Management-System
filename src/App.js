// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import RemoveBook from "./components/RemoveBook";
import BookDetails from "./components/BookDetails";
import IssueBook from "./components/IssueBook";
import RetrieveBook from "./components/RetrieveBook";
import UserInfo from "./components/UserInfo";
import AddUser from "./components/AddUser";
import RemoveUser from "./components/RemoveUser";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/remove-book" element={<RemoveBook />} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/retrieve-book" element={<RetrieveBook />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/remove-user" element={<RemoveUser />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
