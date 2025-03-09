import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <span className="logo-text">UI</span>
              <span className="logo-accent">Showcase</span>
            </div>
            <p>Demonstrating beautiful UI design with modern web technologies.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.x.com" target="_blank">Twitter</a></li>
                <li><a href="https://www.github.com/tanstar99" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/tanish-raigandhi" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UI Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;