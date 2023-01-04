import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => (
  <div>
    <div>
      <p>
        Created with
        {' '}
        <FavoriteIcon style={{
          display: 'inline-block',
          color: 'red',
          height: '1rem',
        }}
        />
        {' '}
        by Mancoba Sihlongonyane
      </p>
    </div>
    <div>
      <p>
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
      </p>
    </div>

  </div>
);

export default Footer;
