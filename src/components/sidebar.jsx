import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
