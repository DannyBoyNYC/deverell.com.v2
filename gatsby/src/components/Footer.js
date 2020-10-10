import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  .solid-footer {
    color: rgba(255, 255, 255, 0.7);
    background-color: var(--black);
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
