import React from 'react';
import {StyledHeader } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderMenu } from '../../layouts/HeaderMenu/HeaderMenu';
import { StyledHeaderLogoImg } from '../../layouts/HeaderMenu/styles';

export function Header() {

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledHeaderLogoImg src='/fixly-logo.png'onClick={() => navigate("/")} />
     <HeaderMenu />
    </StyledHeader>
  )
}
