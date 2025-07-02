import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">UserApp</Link>
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/form">Add User</Link>
        <Link className="nav-link" to="/table">View Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
