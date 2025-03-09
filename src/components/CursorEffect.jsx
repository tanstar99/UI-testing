import React, { useEffect, useState } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (hidden) {
        setHidden(false);
      }
    };
    
    const handleMouseLeave = () => {
      setHidden(true);
    };
    
    const handleMouseEnter = () => {
      setHidden(false);
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hidden]);
  
  return (
    <div 
      className={`cursor-effect ${hidden ? 'hidden' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="cursor-inner"></div>
      <div className="cursor-outer"></div>
    </div>
  );
};

export default CursorEffect;