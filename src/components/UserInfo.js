import React, { useState } from "react";
import "./UserInfo.css"; // Import the CSS for styling

const UserInfo = () => {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    // Add logic to fetch user info based on the entered userId from the database
    // Simulated user data for now
    setUserInfo({
      name: "John Doe",
      email: "john@example.com",
      userId: userId,
      issuedBooks: 3,
    });
  };

  return (
    <div className="container mt-4">
      <div className="user-info-form">
        <h2 className="user-info-header">User Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId" className="user-info-label">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control user-info-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="btn btn-primary">
              Get User Info
            </button>
          </div>
        </form>
      </div>

      {userInfo && (
        <div className="user-details mt-4">
          <h4 className="user-details-header">User Details:</h4>
          <div className="user-detail">
            <strong>Name:</strong> {userInfo.name}
          </div>
          <div className="user-detail">
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div className="user-detail">
            <strong>User ID:</strong> {userInfo.userId}
          </div>
          <div className="user-detail">
            <strong>Number of Issued Books:</strong> {userInfo.issuedBooks}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
