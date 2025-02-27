// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ProjectFlow</Link>
      </div>
      <div className="navbar-links">
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
      </div>
    </nav>
  );
}