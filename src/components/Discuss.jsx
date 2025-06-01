'use client';
import React from 'react';
import Image from 'next/image';
import './Discuss.css';

const Discuss = () => {
  return (
    <section className="discuss-section">
      <div className="discuss-container">
        <Image
          src="/Lets.png"
          alt="Let's Discuss"
          width={900}
          height={120}
          className="discuss-image"
        />
        <div className="discuss-buttons">
          <button
            className="discuss-button discuss-connect"
            onMouseOver={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://your-connect-link.com', '_blank')}
          >
            Connect Now
          </button>
          <button
            className="discuss-button discuss-follow"
            onMouseOver={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#a100ff';
              e.currentTarget.style.borderColor = '#a100ff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = '#fff';
            }}
            onClick={() => window.open('https://your-follow-link.com', '_blank')}
          >
            Follow us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discuss; 