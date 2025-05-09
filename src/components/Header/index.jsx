import React from 'react';
import {StyledHeader } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderMenu } from '../../layouts/HeaderMenu/HeaderMenu';
import { StyledHeaderLogoImg } from '../../layouts/HeaderMenu/styles';
import logo from "../../assets/fixly-logo.png";

export function Header() {

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledHeaderLogoImg src={logo} onClick={() => navigate("/")} />
     <HeaderMenu />
    </StyledHeader>
  )
}
