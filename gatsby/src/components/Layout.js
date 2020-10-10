import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  .sidebar {
    /* width: 45%;
    min-height: 100vh; */
    color: rgba(255, 255, 255, 0.7);
    background-color: var(--black);
  }
  .sidebar-container {
    // mobile first
    width: 80%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    // end

    /* margin-left: 3em;
    width: 60%;
    max-width: 600px; */
  }
  .main {
    width: 55%;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <div className="sidebar">
          <div className="sidebar-container">
            <Nav />
            {children}
          </div>
        </div>
        <div className="main">
          <div className="container">
            <h1>Main</h1>
          </div>
          <Footer />
        </div>
      </ContentStyles>
    </>
  );
}
