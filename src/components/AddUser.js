import React, { useState } from "react";
import "./AddUser.css"; // Import the CSS for styling

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
      <div className="add-user-form">
        <h2 className="add-user-header">Add a New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="add-user-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control add-user-input"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="add-user-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control add-user-input"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId" className="add-user-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control add-user-input"
              name="userId"
              value={user.userId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
