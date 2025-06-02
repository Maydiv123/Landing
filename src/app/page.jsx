import Header from '../components/Header';
import OurService from '../components/OurService';
import Footer from '../components/Footer';
import BestProject from '../components/BestProject';
import Discuss from '../components/Discuss';
import ContactSection from '../components/ContactSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Header />
      <OurService />
      <BestProject />
      <Discuss />
      <ContactSection />
      <Footer>
        <Link href="/about" className="footer-link">About Us</Link>
      </Footer>
    </main>
  );
} 