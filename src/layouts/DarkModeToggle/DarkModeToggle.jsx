/* eslint-disable react/react-in-jsx-scope */
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

import { useDarkMode } from "../../context/DarkModeContext";

export function DarkModeToggle(){
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
