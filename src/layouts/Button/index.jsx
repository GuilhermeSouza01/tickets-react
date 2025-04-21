/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledButton } from "./styles";

export function Button({ children, size="small", variant="primary", ...rest}) {
  return (
    <StyledButton size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

