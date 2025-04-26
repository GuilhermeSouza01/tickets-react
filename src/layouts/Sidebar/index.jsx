import React from "react";
import { StyledSidebar } from "./styles";
import { MainNav } from "../MainNav/MainNav";

export function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}
