/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledInput } from "./styles";

export function Input({value, onChange, ...props}) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      {...props}

    />
  )
}
