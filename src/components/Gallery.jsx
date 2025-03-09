import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const images = [
  {
    url: '/src/images/WEBAPP.jpeg',
    title: 'Dashboard UI Design',
    category: 'Web App'
  },
  {
    url: '/src/images/MOBILEAPP.jpeg',
    title: 'Mobile App Interface',
    category: 'Mobiles'
  },
  {
    url: '/src/images/ECOM.jpeg',
    title: 'E-commerce Product Page',
    category: 'E-commerce'
  },
  {
    url: '/src/images/PORTFOLIO.jpeg',
    title: 'Portfolio Layout',
    category: 'Portfolio'
  }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  
  return (
    <section id="gallery" className="gallery" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">UI Gallery</h2>
        
        <div className="gallery-carousel">
          <div className="slider-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <img src={image.url} alt={image.title} />
                <div className="slide-content">
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-control prev" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button className="carousel-control next" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;