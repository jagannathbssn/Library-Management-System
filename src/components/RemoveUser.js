import React, { useState } from "react";
import "./RemoveUser.css"; // Import the CSS for styling

const RemoveUser = () => {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    // Add logic here to remove the user from the database or state
  };

  return (
    <div className="container mt-4">
      <div className="ru">
        <h2 className="ru-header">Remove a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId" className="ru-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control ru-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-danger">
              Remove User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RemoveUser;
