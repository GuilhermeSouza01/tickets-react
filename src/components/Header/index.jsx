import React from 'react';
import {StyledHeader } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderMenu } from '../../layouts/HeaderMenu/HeaderMenu';

export function Header() {

  return (
    <StyledHeader>

     <HeaderMenu />
    </StyledHeader>
  )
}
