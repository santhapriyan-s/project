import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; // Home icon
import { FaInfoCircle, FaBoxOpen, FaShoppingCart, FaUserAlt } from 'react-icons/fa'; // Icons for other links

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* SR Electricals text as a branding */}
        <span className="logo-text">SR ELECTRICALS</span>
      </div>
      <div className="nav-links">
        <Link to="/main" className="nav-item">
          <AiFillHome className="nav-icon" /> Home
        </Link>
        <Link to="/about" className="nav-item">
          <FaInfoCircle className="nav-icon" /> About
        </Link>
        <Link to="/products" className="nav-item">
          <FaBoxOpen className="nav-icon" /> Products
        </Link>
        <Link to="/cart" className="nav-item">
          <FaShoppingCart className="nav-icon" /> Cart
        </Link>
        <Link to="/profile" className="nav-item">
          <FaUserAlt className="nav-icon" /> Profile
        </Link>
        {user && (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
