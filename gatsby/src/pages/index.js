import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const PageDetails = styled.nav`
  margin-top: 5em;
  padding-bottom: 5em;
`;

export default function HomePage() {
  return (
    <PageDetails>
      <h1>William Deverell</h1>
      <p>Hey! I'm the home page</p>
    </PageDetails>
  );
}
