'use client';

import Header from '../components/Header';
import OurService from '../components/OurService';
import Footer from '../components/Footer';
import BestProject from '../components/BestProject';
import Discuss from '../components/Discuss';
import ContactSection from '../components/ContactSection';
import Link from 'next/link';
import Lottie from 'lottie-react';

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919220438999', '_blank');
  };

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Header />
      <OurService />
      <BestProject />
      <Discuss />
      <ContactSection />
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          width: '80px', 
          height: '80px', 
          cursor: 'pointer',
          zIndex: 1000
        }}
        onClick={handleWhatsAppClick}
      >
        <Lottie
          animationData={require('../../public/Whatsapp.json')}
          loop={true}
          autoplay={true}
        />
      </div>
      <Footer>
        <Link href="/about" className="footer-link">About Us</Link>
      </Footer>
    </main>
  );
} 