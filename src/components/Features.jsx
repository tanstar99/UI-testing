import React, { useEffect, useRef } from 'react';
import './Features.css';

const featureData = [
  {
    icon: '✨',
    title: 'Elegant Animations',
    description: 'Smooth transitions and effects enhance the user experience making interactions delightful.'
  },
  {
    icon: '🎨',
    title: 'Beautiful UI',
    description: 'Clean, modern design with attention to detail and consistent visual language.'
  },
  {
    icon: '📱',
    title: 'Responsive Layout',
    description: 'Adapts perfectly to all screen sizes from mobile devices to large desktop displays.'
  },
  {
    icon: '🔍',
    title: 'Attention to Detail',
    description: 'Thoughtful micro-interactions and polish that elevate the overall experience.'
  }
];

const Features = () => {
  const featuresRef = useRef(null);
  
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
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="features" ref={featuresRef}>
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        
        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div className="feature-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;