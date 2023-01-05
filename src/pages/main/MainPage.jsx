import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../features/Navbar/Navbar';
import headerData from '../../data/headerData';
import Footer from '../../features/Footer/Footer';
import Beers from '../../features/Beers/Beers';
import Contact from '../../features/Contact/Contact';

const MainPage = () => (
  <div>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        | Beer Lovers Application
      </title>
      <meta name="description" content="Beer lovers application" />
    </Helmet>
    <Navbar />
    <Beers />
    <Contact />
    <Footer />

  </div>
);

export default MainPage;
