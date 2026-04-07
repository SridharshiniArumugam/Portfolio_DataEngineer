import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-links">
          <a href="https://github.com/prasanna-kumar-g" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prasanna-kumar-ganesan-66641575/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:prasannags22@gmail.com">
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Prasanna Kumar Ganesan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
