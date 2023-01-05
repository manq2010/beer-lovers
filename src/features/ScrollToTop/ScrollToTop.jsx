import React, { useState } from 'react';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      style={{
        display: visible ? 'inline' : 'none',
        position: 'fixed',
        right: '1rem',
        bottom: '3rem',
        height: '3rem',
        zIndex: '10',
      }}
    >
      <button
        style={{
          outline: 'none',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
      >
        <ArrowCircleUpIcon style={{ fontSize: '2.5rem', color: '#fff' }} />
      </button>
    </div>
  );
};

export default ScrollToTop;
