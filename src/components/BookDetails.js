// components/BookDetails.js
import React, { useState } from "react";

const BookDetails = () => {
  const [isbn, setIsbn] = useState("");
  const [bookDetails, setBookDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isbn);
    // Fetch the book details from the database and set the bookDetails state
  };

  return (
    <div className="container mt-4">
      <h2>Book Details</h2>
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
        <button type="submit" className="btn btn-info">
          Get Details
        </button>
      </form>
      {bookDetails && (
        <div className="mt-4">
          <h4>{bookDetails.title}</h4>
          <p>
            <strong>Author:</strong> {bookDetails.author}
          </p>
          <p>
            <strong>ISBN:</strong> {bookDetails.isbn}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
