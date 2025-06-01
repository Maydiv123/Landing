import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <div className="footer-logo">MAYDIV Infotech</div>
          <div className="footer-desc">Creating innovative digital solutions for your business needs.</div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Explore</div>
          <a href="#" className="footer-link">Resources</a>
          <a href="#" className="footer-link">Blog</a>
          <a href="#" className="footer-link">Documents</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">Menu</div>
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About Us</Link>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">OFFICE LOCATION</div>
          <div className="footer-address">Location: SCO-105,Second Floor,World Street,Faridabad-121004,HR.</div><br/>
          <div className="Whatsapp">
            <a href="https://wa.me/919220438999" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              <img src="/WhatsApp.svg" alt="WhatsApp" style={{ width: 27, height: 27, marginRight: 8, display: 'inline', verticalAlign: 'middle' }} />
              +91 92204 38999
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Cookies</a>
        </div>
        <div className="footer-copyright">© 2025 By Avinash. All Rights Reserved.</div>
        <div className="footer-socials">
          <a href="#" className="footer-social"><i className="fa fa-facebook"></i></a>
          <a href="#" className="footer-social"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="footer-social"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 