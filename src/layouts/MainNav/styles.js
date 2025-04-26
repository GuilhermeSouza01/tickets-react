import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${props => props.theme["color-grey-600"]};
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: ${props => props.theme["color-grey-800"]};
    background-color: ${props => props.theme["color-grey-100"]};
    border-radius: ${props => props.theme["border-radius-sm"]};
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme["color-grey-400"]};
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: ${props => props.theme["color-brand-600"]};
  }
`;
