/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Error, Label, StyledFormRow } from "./styles";

export function FormRow({label, error, children}) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  )
}
