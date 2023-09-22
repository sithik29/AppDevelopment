import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/homepage.css"

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-name"><i>study</i></span>
          </div>
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      
  

      {/* Centered text with custom color */}
      <div className="centered-text">
        <h1>We Study <span className="birthday-party-text">Together</span></h1>
      </div>

      {/* Add the rest of your content here */}
    </div>
  );
}

export default HomePage;
