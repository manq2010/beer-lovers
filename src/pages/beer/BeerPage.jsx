import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import headerData from '../../data/headerData';
import SingleBeer from '../../components/Beers/SingleBeer/SingleBeer';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const BeerPage = () => {
  const location = useLocation();
  // if (location.state) {
  //   const { stateData } = location.state;
  // }
  const stateData = location.state?.stateData;

  return (
    <>
      <Helmet>
        <title>
          {headerData.name}
          {' '}
          |
          {' '}
          Beer
        </title>
        <meta name="description" content="Beer lovers application" />
      </Helmet>
      <Navbar />
      <div>
        {
          stateData && typeof stateData === 'object' && (
            <SingleBeer
              key={stateData.beer.id}
              beer={stateData.beer}
            />
          )
        }
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default BeerPage;
