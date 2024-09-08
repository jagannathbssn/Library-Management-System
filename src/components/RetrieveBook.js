import React, { useState } from "react";
import "./RetrieveBook.css"; // Import CSS for styling

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
      <div className="retrieve-book-form">
        <h2 className="retrieve-book-header">Retrieve a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId" className="retrieve-book-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control retrieve-book-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn" className="retrieve-book-label">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              className="form-control retrieve-book-input"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-success">
              Retrieve Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RetrieveBook;
