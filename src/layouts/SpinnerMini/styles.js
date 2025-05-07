import { BiLoaderAlt } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const StyledSpinnerMini = styled(BiLoaderAlt)`
  width: 1.5rem;
  height: 1.5rem;
  animation: ${rotate} 1.5s infinite linear;
`;
