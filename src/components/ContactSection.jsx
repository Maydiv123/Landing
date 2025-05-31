'use client';
import React, { useState } from 'react';
import './ContactSection.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwLTy5skWfAjg3KUf3SAONiVpYy_mADkxpWJn0tR2eoQDK0rd5YBBJ2Pa5Kfua_R-so8g/exec'; // <-- Replace with your deployed Apps Script URL

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', query: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Your message has been sent!');
        setForm({ name: '', phone: '', email: '', query: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="contact-field">
            <input type="text" name="name" placeholder=" " className="contact-input" required value={form.name} onChange={handleChange} />
            <label className="contact-label">Name</label>
          </div>
          <div className="contact-field">
            <input type="tel" name="phone" placeholder=" " className="contact-input" required value={form.phone} onChange={handleChange} />
            <label className="contact-label">Phone Number</label>
          </div>
          <div className="contact-field">
            <input type="email" name="email" placeholder=" " className="contact-input" required value={form.email} onChange={handleChange} />
            <label className="contact-label">Email</label>
          </div>
          <div className="contact-field">
            <textarea name="query" placeholder=" " className="contact-input" rows={3} required value={form.query} onChange={handleChange} />
            <label className="contact-label">Your Query</label>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        {status && <div className="contact-status">{status}</div>}
      </div>
    </section>
  );
};

export default ContactSection; 