import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;

  .solid-footer {
    color: rgba(255, 255, 255, 0.7);
    background-color: var(--black);
    font-size: 0.7em;
    line-height: 1.5;
    padding: 3em 2rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="solid-footer">
        <div classNAame="container">
          <p>&copy; William Deverell {new Date().getFullYear()}</p>
        </div>
      </div>
    </FooterStyles>
  );
}
