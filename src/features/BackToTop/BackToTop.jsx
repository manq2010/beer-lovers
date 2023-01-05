import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  // const useStyles = makeStyles(() => ({
  //   icon: {
  //     fontSize: '3rem',
  //     color: theme.tertiary,
  //   },
  // }));

  // const classes = useStyles();

  return (
    <div
      style={{ display: visible ? 'inline' : 'none' }}
      className="backToTop"
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUpwardIcon style={{ fontSize: '3rem' }} />
      </button>
    </div>
  );
}

export default BackToTop;
