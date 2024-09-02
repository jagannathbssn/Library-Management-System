// components/AddBook.js
import React, { useState } from "react";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", isbn: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    // Add logic to add book to the database or state
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
