import React, { useState } from "react";
import "./BookDetails.css"; // Import the CSS for styling

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
      <div className="bd">
        <h2 className="bd-header">Book Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="isbn" className="bd-label">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              className="form-control bd-input"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-info">
              Get Details
            </button>
          </div>
        </form>

        {bookDetails && (
          <div className="book-info mt-4">
            <h4 className="book-title">{bookDetails.title}</h4>
            <p>
              <strong>Author:</strong> {bookDetails.author}
            </p>
            <p>
              <strong>ISBN:</strong> {bookDetails.isbn}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
