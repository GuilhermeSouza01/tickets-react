/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledLogoutButton } from "./styles";

export function LogoutButton({ onClick, children, disabled }) {
  return (
    <StyledLogoutButton onClick={onClick} disabled={disabled} type="button">
       {children}
    </StyledLogoutButton>
  );
}
