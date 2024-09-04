import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="/favicon.jpeg" alt="Logo" className="logo" />
        <h1 className="title">Library Management System</h1>
      </div>
    </header>
  );
}

export default Header;
