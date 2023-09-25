import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'
const Footer = () => {
  return (
    <footer>
     
      <p>&copy; {new Date().getFullYear()} </p>
      <div className='term'>
     <Link to="/terms">Terms and Conditions</Link>
      </div>
      <div className='faq'>
     <Link to="/faq">FAQ</Link>
      </div>
      <div className='privacy'>
     <Link to="/privacy">privacy and policy</Link>
      </div>
    <Link to="/homepage">home</Link>
    </footer>
  );
};

export default Footer;
