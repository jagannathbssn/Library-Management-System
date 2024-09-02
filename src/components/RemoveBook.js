// components/RemoveBook.js
import React, { useState } from "react";

const RemoveBook = () => {
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isbn);
    // Add logic to remove book from the database or state
  };

  return (
    <div className="container mt-4">
      <h2>Remove a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Remove Book
        </button>
      </form>
    </div>
  );
};

export default RemoveBook;
