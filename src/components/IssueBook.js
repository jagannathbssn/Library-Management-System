// components/IssueBook.js
import React, { useState } from "react";

const IssueBook = () => {
  const [userId, setUserId] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userId, isbn });
    // Logic to issue the book to the user
  };

  return (
    <div className="container mt-4">
      <h2>Issue a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Issue Book
        </button>
      </form>
    </div>
  );
};

export default IssueBook;
