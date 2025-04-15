import React from 'react';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <span>Fixly</span>
      <nav>
        <a href='/'>User</a>
      </nav>
    </HeaderContainer>
  )
}
