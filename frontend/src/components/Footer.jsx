import { SOCIAL_LINKS } from '../utils/constants';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h3>Code & Compass</h3>
            <p>
              Building beautiful web experiences and conquering peaks. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/adventures">Adventures</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="footer-social-link" 
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Nischay Poudel. All rights reserved. | Designed with ♟️ & ⛰️
          </p>
        </div>
      </div>
    </footer>
  );
}