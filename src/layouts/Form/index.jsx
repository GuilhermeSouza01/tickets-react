/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledForm } from "./styles";

export function Form({children, ...props}) {
  return (
    <StyledForm {...props}>
      {children}
    </StyledForm>
  )
}
