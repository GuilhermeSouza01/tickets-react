/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { StyledTag } from "./styles";

export function Tag({ children, ...props }) {
  return (
    <StyledTag {...props}>
      {children}
    </StyledTag>
  )
}
