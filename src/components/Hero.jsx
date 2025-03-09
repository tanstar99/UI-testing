import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elegant UI
            <span className="accent">Design</span>
            Showcase
          </h1>
          <p className="hero-subtitle">
            Demonstrating beautiful interfaces with smooth animations and modern design principles
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Features</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;