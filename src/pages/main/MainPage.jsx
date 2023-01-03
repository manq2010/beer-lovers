import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../features/Navbar/Navbar';
import headerData from '../../data/headerData';
import Footer from '../../features/Footer/Footer';

const MainPage = () => (
  <div>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        | Beer Lovers Application
      </title>
      <meta name="description" content="beer lovers application" />
    </Helmet>
    <Navbar />

    <Footer />

  </div>
);

export default MainPage;
