
/* eslint-disable react/react-in-jsx-scope */

import { Link, useNavigate } from "react-router-dom";
import { StyledHeaderLogoImg, StyledHeaderMenu,  } from "./styles";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export function HeaderMenu() {

  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}
