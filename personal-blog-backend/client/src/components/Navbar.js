 import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        {/* Link use karne se page refresh nahi hota */}
        <Link to="/">Home</Link>
        <Link to="/post/1">Sample Post</Link>
        <Link to="/admin/login">Admin Login</Link>
        <Link to="/admin/dashboard">Admin Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;