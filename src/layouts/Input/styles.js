import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme["color-grey-300"]};
  background-color: ${(props) => props.theme["color-grey-0"]};
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  padding: 0.5rem 0.75rem;
  box-shadow: ${(props) => props.theme["shadow-sm"]};

  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
`;
