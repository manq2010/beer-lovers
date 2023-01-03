import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../../features/NotFound/NotFound';
import headerData from '../../data/headerData';

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        | NotFound
      </title>
    </Helmet>
    <NotFound />
  </div>
);

export default NotFoundPage;
