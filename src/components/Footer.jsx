import React from 'react';
import './Footer.css';

const Footer = (props) => {
  const { name, date } = props;

  return (
    <footer className="footer">
      <p className="footer-text">© {name} | {date}</p>
    </footer>
  );
};

export default Footer;
