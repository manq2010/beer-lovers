import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useLocation } from 'react-router-dom';
import headerData from '../../data/headerData';
import SingleBeer from '../../features/Beers/SingleBeer/SingleBeer';

const BeerPage = () => {
  const location = useLocation();
  const { stateData } = location.state;

  console.log(stateData.beer);

  return (
    <>
      <Helmet>
        <title>
          {headerData.name}
          Beer
        </title>
        <meta name="description" content="Beer lovers application" />
      </Helmet>
      <h1>Beer</h1>
      <button type="button">
        <NavLink to="/">To home</NavLink>
      </button>

      <div>
        <SingleBeer
          key={stateData.beer.id}
          beer={stateData.beer}
        />
      </div>
    </>
  );
};

export default BeerPage;
