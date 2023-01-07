import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../../components/NotFound/NotFound';
import headerData from '../../data/headerData';
import shortName from '../../utils/shortName';

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>
        Not Found
        {' '}
        |
        {' '}
        {shortName(headerData.name, 10)}
        {' '}
        |
        {' '}
        Beer Lovers App
      </title>
    </Helmet>
    <NotFound />
  </div>
);

export default NotFoundPage;
