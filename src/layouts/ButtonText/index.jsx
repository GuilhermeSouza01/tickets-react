/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledButtonText } from "./styles";

export function ButtonText({ children, onClick}) {
  return (

      <StyledButtonText onClick={onClick}>
          {children}
      </StyledButtonText>

  );
}
