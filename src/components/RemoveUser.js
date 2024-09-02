// components/RemoveUser.js
import React, { useState } from "react";

const RemoveUser = () => {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    // Add logic here to remove the user from the database or state
  };

  return (
    <div className="container mt-4">
      <h2>Remove a User</h2>
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
        <button type="submit" className="btn btn-danger">
          Remove User
        </button>
      </form>
    </div>
  );
};

export default RemoveUser;
