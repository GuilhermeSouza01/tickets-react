
/* eslint-disable react/react-in-jsx-scope */

import { useNavigate } from "react-router-dom";
import { StyledHeaderMenu } from "./styles";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { HiOutlineMoon, HiOutlineUser } from "react-icons/hi2";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export function HeaderMenu() {

  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}
