// components/AddUser.js
import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({ name: "", email: "", userId: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // Add logic here to save the user details to the database or state
  };

  return (
    <div className="container mt-4">
      <h2>Add a New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            name="userId"
            value={user.userId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
