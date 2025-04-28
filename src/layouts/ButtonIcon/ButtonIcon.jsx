/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { StyledButtonIcon } from "./styles";


export function ButtonIcon({children, onClick}) {
  return (
    <StyledButtonIcon onClick={onClick}>
      {children}
    </StyledButtonIcon>
  )
}
