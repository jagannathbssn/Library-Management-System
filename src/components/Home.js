import React, { useState, useEffect } from "react";

function Home() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    booksIssued: 0,
  });

  useEffect(() => {
    // Simulate an API call to get stats (replace this with real API calls)
    const fetchStats = () => {
      setStats({
        totalBooks: 100, // Example data
        totalUsers: 50, // Example data
        booksIssued: 20, // Example data
      });
    };
    fetchStats();
  }, []);

  return (
    <div className="container">
      <h2>Library Stats</h2>
      <div className="stats">
        <p>Total Books: {stats.totalBooks}</p>
        <p>Total Users: {stats.totalUsers}</p>
        <p>Books Issued: {stats.booksIssued}</p>
      </div>
    </div>
  );
}

export default Home;
