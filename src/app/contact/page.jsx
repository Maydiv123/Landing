import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import Link from 'next/link';
import './contact.css';

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactSection />
      <Footer>
        <Link href="/about" className="footer-link">About Us</Link>
      </Footer>
    </main>
  );
} 