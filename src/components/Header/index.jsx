import React from 'react';
import {StyledHeader } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <span>Fixly</span>
      <nav>
        <a href='/'>User</a>
        <a href='/tickets'>Tickets</a>
      </nav>
    </StyledHeader>
  )
}
