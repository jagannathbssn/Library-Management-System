import React, { useState } from "react";

import "./AddBook.css";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", isbn: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
  };

  return (
    <div className="container mt-4">
      <div className="ab">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author </label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>ISBN </label>
            <input
              type="text"
              className="form-control"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
