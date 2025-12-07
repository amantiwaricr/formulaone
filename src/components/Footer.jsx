import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>F1 Elite</h3>
          <p>Your premier destination for Formula 1 teams, drivers, and merchandise.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Teams</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/merchandise">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 F1 Elite. All rights reserved.</p>
        <p>Formula 1 is a trademark of Formula 1 Management Limited.</p>
      </div>
    </footer>
  );
}

export default Footer;
