import React, { useState, useEffect } from "react";
import { Card } from "antd-mobile"; // Assuming MIUI components are imported from antd-mobile
import "./Home.css";

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
        <Card className="stat-card">
          <p>Total Books: {stats.totalBooks}</p>
        </Card>
        <Card className="stat-card">
          <p>Total Users: {stats.totalUsers}</p>
        </Card>
        <Card className="stat-card">
          <p>Books Issued: {stats.booksIssued}</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
