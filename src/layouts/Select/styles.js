import styled from "styled-components";

export const StyledSelect = styled.select`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.type === "white" ? `${props.theme["color-grey-100"]}` : `${props.theme["color-grey-300"]}`};
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  background-color: ${(props) => props.theme["color-grey-0"]};
  font-weight: 500;
  box-shadow: ${(props) => props.theme["shadow-sm"]};
`;
