'use client';
import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(null);
  const [width,setWidth] = useState();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
      setWidth(window.innerWidth)
    };

    // Initial check
    checkIsMobile();

    // Listen for window resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return {isMobile, width};
};

export default useIsMobile;