import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';
import headerData from '../../data/headerData';
import Footer from '../../components/Footer/Footer';
import Beers from '../../components/Beers/Beers';
import Contact from '../../components/Contact/Contact';
import shortName from '../../utils/shortName';

const MainPage = () => (
  <div>
    <Helmet>
      <title>
        Beers
        {' '}
        |
        {' '}
        {shortName(headerData.name, 10)}
        {' '}
        |
        {' '}
        Beer Lovers App
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
