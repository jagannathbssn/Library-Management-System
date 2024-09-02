// components/UserInfo.js
import React, { useState } from "react";

const UserInfo = () => {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    // Add logic to fetch user info based on the entered userId from the database
    // For now, let's assume we get some user data:
    setUserInfo({
      name: "John Doe",
      email: "john@example.com",
      userId: userId,
      issuedBooks: 3,
    });
  };

  return (
    <div className="container mt-4">
      <h2>User Information</h2>
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
        <button type="submit" className="btn btn-primary">
          Get User Info
        </button>
      </form>

      {userInfo && (
        <div className="mt-4">
          <h4>User Details:</h4>
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p>
            <strong>User ID:</strong> {userInfo.userId}
          </p>
          <p>
            <strong>Number of Issued Books:</strong> {userInfo.issuedBooks}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
