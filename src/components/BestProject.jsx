import React from 'react';
import Image from 'next/image';
import './BestProject.css';

const projects = [
  { img: '/1.png', url: 'https://schools18.com/' },
  { img: '/2.png', url: 'https://www.collegedisha.com/' },
  { img: '/3.png', url: 'https://sunpay.co.in/' },
  { img: '/4.png', url: 'https://dapachecking.com/' },
  { img: '/5.png', url: 'https://fika-india.com/' },
  { img: '/6.png', url: 'https://www.dapchecking.com/' },

  // ...baaki projects agar hain toh unko bhi isi format me add karein
];

const filters = [
  { label: 'Design', active: true, icon: '/Design.png' },
  { label: 'Development', active: false, icon: '/Development.png' },
  { label: 'Digital Marketing', active: false, icon: '/Digital.png' },
  { label: 'SEO', active: false, icon: '/Seo.png' },
];

const BestProject = () => {
  return (
    <section className="best-project-section" id="our-projects">
      <h2 className="best-project-heading">BEST PROJECT.</h2>
      {/* Filter Bar */}
      <div className="best-project-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter.label}
            className={`best-project-filter-btn${filter.active ? ' active' : ''}`}
          >
            <img src={filter.icon} alt={filter.label + ' icon'} />
            {filter.label}
          </button>
        ))}
      </div>
      <div className="best-project-grid">
        {projects.map((project, idx) => (
          <div key={project.img} className="best-project-image-wrapper">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.img}
                alt={`Project ${idx + 1}`}
                width={400}
                height={220}
                className="best-project-image"
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProject; 