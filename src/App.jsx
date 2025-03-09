import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake loading state to show off loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll progress tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading UI Showcase</p>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <CursorEffect />
      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>
      <Navbar theme={theme} />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App
