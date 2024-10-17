// ScrollProgressBar.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: purple;
  z-index: 1000;
  transition: width 0.1s ease-in-out;
`;

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalHeight = documentHeight - windowHeight;
    const scrollPercent = (scrollTop / totalHeight) * 100;

    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ProgressBar style={{ width: `${scrollWidth}%` }} />;
};

export default ScrollProgressBar;
