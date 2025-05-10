import styled from "styled-components";

export const StyledTag = styled.span`
  width: fit-content;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7rem;
  border-radius: 100px;

  color: ${(props) => props.theme[props.textcolor]};
  background-color: ${(props) => props.theme[props.bgColor]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};
`;
