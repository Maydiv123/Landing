import Header from '../../components/Header';
import OurService from '../../components/OurService';
import Footer from '../../components/Footer';
import BestProject from '../../components/BestProject';
import Discuss from '../../components/Discuss';
import ContactSection from '../../components/ContactSection';
import Link from 'next/link';

export default function Projects() {
  return (
    <main>
      <Header />
      <OurService />
      <BestProject />
      <Discuss />
      <Footer>
        <Link href="/about" className="footer-link">About Us</Link>
      </Footer>
    </main>
  );
} 