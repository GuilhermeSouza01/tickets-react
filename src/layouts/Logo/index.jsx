/* eslint-disable react/react-in-jsx-scope */
import { Img, StyledLogo } from "./styles";
import logo  from "../../../public/fixly-logo.png";

export function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} alt="Logo" />
    </StyledLogo>
  )
}
