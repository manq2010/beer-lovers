import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const NotFound = () => (
  <NotFoundContainer>
    <h3>404!</h3>
    <p>
      Page
      {' '}
      <em>Not</em>
      {' '}
      Found!
    </p>
  </NotFoundContainer>
);

export default NotFound;
