// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Library
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-book">
              Add Book
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/remove-book">
              Remove Book
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book-details">
              Book Details
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/issue-book">
              Issue Book
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/retrieve-book">
              Retrieve Book
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-info">
              User Info
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-user">
              Add User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/remove-user">
              Remove User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
