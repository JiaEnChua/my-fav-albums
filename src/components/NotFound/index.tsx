import React from 'react';
import styled from 'styled-components';

const ErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
`;
const NotFound: React.FC = () => (
  <ErrorCard>Sorry, that page is not found</ErrorCard>
);

export default NotFound;
