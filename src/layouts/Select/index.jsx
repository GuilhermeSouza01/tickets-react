/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledSelect } from "./styles";

export function Select({options, value, onChange, ...props}) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value} >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}
