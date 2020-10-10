import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    font-size: 0.9em;
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    gap: 2rem;
    /* align-items: center; */
    justify-items: center;
  }
  li {
    font-size: 0.9em;
    width: 100%;
    &:nth-child(1) {
      background: var(--white);
      padding-left: 0.7em;
      padding-right: 0.7em;
      a {
        color: var(--black);
      }
    }
    a {
      display: block;
      padding: 4em 0.5em 0.5em 0.5em;
      color: white;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/" className="home">
            home
          </Link>
        </li>
        <li>
          <Link to="/blog/">blog</Link>
        </li>
        <li>
          <Link to="/books/">books</Link>
        </li>
        <li>
          <Link to="/bio/">bio</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
