import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
     
      <p>&copy; {new Date().getFullYear()} </p>
     <Link to="/terms">Terms and Conditions</Link>
    </footer>
  );
};

export default Footer;
