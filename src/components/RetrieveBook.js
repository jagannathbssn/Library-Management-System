// components/RetrieveBook.js
import React, { useState } from "react";

const RetrieveBook = () => {
  const [userId, setUserId] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userId, isbn });
    // Add logic here to retrieve the book from the user
  };

  return (
    <div className="container mt-4">
      <h2>Retrieve a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Retrieve Book
        </button>
      </form>
    </div>
  );
};

export default RetrieveBook;
