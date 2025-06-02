/* eslint-disable react/react-in-jsx-scope */

import { NavLink } from "react-router-dom";
import { NavList, StyledNavLink } from "./styles";
import { HiOutlineHome, HiOutlineTicket } from "react-icons/hi2"

export function MainNav() {
  return (
    <nav>
      <NavList>
          <li>
            <StyledNavLink to="home">
            <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/tickets">
              <HiOutlineTicket />
              <span>Tickets</span>
            </StyledNavLink>
          </li>
        </NavList>
    </nav>
  );
};
