/* eslint-disable react/react-in-jsx-scope */
import { Img, StyledLogo } from "./styles";
import logo  from "../../assets/fixly-logo.png";

export function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} alt="Logo" />
    </StyledLogo>
  )
}
