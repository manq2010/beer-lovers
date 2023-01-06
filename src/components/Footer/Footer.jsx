import React from 'react';

const Footer = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #fff',
    gap: '1rem',
  }}
  >
    <div style={{
      margin: '1rem 0 1rem 0',
    }}
    >
      <p>
        Created by
        {' '}
        <em>Mancoba Sihlongonyane</em>
      </p>
    </div>
    <div>
      <p>
        &copy; Copyright
        {' '}
        2023 -
        {' '}
        {new Date().getFullYear()}
      </p>
    </div>

  </div>
);

export default Footer;
