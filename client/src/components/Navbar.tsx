import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          OptiWave
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/trending" className="nav-link">Trending</Link>
          
          {user ? (
            <>
              <Link to="/upload" className="nav-link">Upload</Link>
              <div className="user-menu">
                <span className="user-name">Welcome, {user.name}</span>
                <button onClick={logout} className="logout-button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="login-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;