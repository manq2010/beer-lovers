import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotFound = () => (
  <NotFoundContainer>
    <h3>404!</h3>
    <p>
      Oops Page
      {' '}
      <em>Not</em>
      {' '}
      Found!
    </p>
  </NotFoundContainer>
);

export default NotFound;
