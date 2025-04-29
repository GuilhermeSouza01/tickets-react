import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const StyledSpinner = styled.div`
  margin: 3rem auto;

  width: 4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${(props) => props.theme["color-brand-400"]} 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, ${(props) => props.theme["color-brand-500"]} );
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s linear infinite;
`;
