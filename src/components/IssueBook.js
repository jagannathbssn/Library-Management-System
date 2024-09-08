import React, { useState } from "react";
import "./IssueBook.css"; // Import the CSS for styling

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
      <div className="ib">
        <h2 className="ib-header">Issue a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId" className="ib-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control ib-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn" className="ib-label">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              className="form-control ib-input"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-primary">
              Issue Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueBook;
