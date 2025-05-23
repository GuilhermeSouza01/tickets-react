import React from "react";
import { StyledLogoutContainer, StyledSidebar } from "./styles";
import { MainNav } from "../MainNav/MainNav";
import { LogoutButton } from "../LogoutButton";
import { Logout } from "../../features/authentication/Logout";

export function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
      <StyledLogoutContainer>
        <Logout />
      </StyledLogoutContainer>

    </StyledSidebar>
  );
}
